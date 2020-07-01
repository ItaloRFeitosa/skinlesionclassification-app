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


print('[Firebase] Starting Service...')
firebase_service = FirebaseService()
print('[Firebase] Done')

print('[Predictions] Starting Predictors...')
predictions = Predictions()
print('[Predictions] Done')

app = Celery('worker', backend='rpc://', broker='amqp://worker_user:worker_user@localhost/service_vhost')


def download_image(img_name):
    blob = firebase_service.bucket.blob(img_name)
    donwloaded_image = str(Path("./downloads", img_name))
    blob.download_to_filename(donwloaded_image)
    return donwloaded_image

def save_results(results, image_id):
    image_ref = firebase_service.db.collection(u'images').document(image_id)
    status = image_ref.update({u'results': results})
    return status

@app.task(bind=True, name='predict', serializer='json')
def predict(self, task_data):    
    print('[Image] Downloading... \n')
    image_to_predict = download_image(task_data['img_name'])
    print('[Image] Done\n')

    print('[Predicition] Running Predictions... \n')
    results = predictions.run(image_to_predict)
    print('[Predicition] Done \n')
    
    print('[Results] Processing Result... \n')
    processed_result = process_result(results)
    print('[Results] Done \n')

    print('[Firebase] Saving Results... \n')
    status = save_results(processed_result, task_data['id'])
    if(status):
        return {
            'message': 'task finished'
        }
    #print('[Email] Sending Email to ', task_data['email'])

    #print('[Image] Deleting Image... \n')

    return {
            'message': 'task failed'
        }
