from celery import Celery

from services.FirebaseService import FirebaseService
from Predictions import Predictions
from result import process_result
from pathlib import Path
import subprocess
import sys
import os
import json
import time

firebase_service = FirebaseService()

predictions = Predictions()

app = Celery('worker', backend='rpc://', broker='amqp://worker_user:worker_user@localhost/service_vhost')


def download_image(img_name):
    blob = firebase_service.bucket.blob(img_name)
    donwloaded_image = str(Path("./downloads", img_name))
    blob.download_to_filename(donwloaded_image)
    return donwloaded_image


@app.task(bind=True, name='predict', serializer='json')
def predict(self, taskData):    

    print('[Image Download] Downloading... \n')
    image_to_predict = download_image(taskData['img_name'])

    print('[Predicition] Running Predictions... \n')
    results = predictions.run(image_to_predict)
    
    
    print('[Results] Processing Result... \n')
    processed_result = process_result(results)

    return processed_result
