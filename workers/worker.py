from celery import Celery
import firebase_admin
from firebase_admin import credentials
from firebase_admin import storage

from features_extraction.cnn_config import inceptionv3_config
from features_extraction.cnn_config import resnet50_config
from features_extraction.cnn_config import xception_config
from features_extraction.cnn_config import vgg16_config
from features_extraction.FeatureExtractor import FeatureExtractor
from PredictionWithSVM import PredictionWithSVM

from pathlib import Path
import subprocess
import sys
import os
import json
import time


serviceAccount = str(Path("..", "serviceAccountKey.json"))

cred = credentials.Certificate(serviceAccount)
firebase_admin.initialize_app(cred, {
    'storageBucket': 'skincc-3af45.appspot.com'
})

bucket = storage.bucket()

app = Celery('worker', backend='rpc://', broker='amqp://worker_user:worker_user@localhost/service_vhost')


inceptionv3_feature_extractor = FeatureExtractor( **inceptionv3_config )
vgg16_feature_extractor = FeatureExtractor( **vgg16_config )
resnet50_feature_extractor = FeatureExtractor( **resnet50_config )
xception_feature_extractor = FeatureExtractor( **xception_config )

def download_image(img_name):
    blob = bucket.blob(img_name)
    donwloaded_image = str(Path("./downloads", img_name))
    blob.download_to_filename(donwloaded_image)
    return donwloaded_image

def run_prediction(img_path, features_extractor):
    prediction_with_svm = PredictionWithSVM(features_extractor)
    result = prediction_with_svm.start(img_path)
    return result

@app.task(bind=True, name='predict', serializer='json')
def predict(self, taskData):

    image_to_predict = download_image(taskData['img_name'])

    result1 = run_prediction(image_to_predict, inceptionv3_feature_extractor)
    result2 = run_prediction(image_to_predict, vgg16_feature_extractor)
    result3 = run_prediction(image_to_predict, resnet50_feature_extractor)
    result4 = run_prediction(image_to_predict, xception_feature_extractor)
    
    return taskData
