from celery import Celery
import subprocess
import sys
import os
import json

app = Celery('predictor', backend='rpc://', broker='amqp://italo:italo@localhost/italo_vhost')


@app.task(name='tasks.predict')
def predict(filename):
    python_path = os.path.join(sys.base_exec_prefix,'python.exe')
    command = python_path + ' classifiers.py ' + filename
    print(command)
    code = subprocess.call(command, shell=True)
    if(code == 0):
        
        name = filename.rsplit('.', 1)[0] + '.json'
        
        path = os.getcwd() + '\\predictions\\'+name
        with open(path) as json_file:
            preds = json.load(json_file)
            return preds
    # print(code)