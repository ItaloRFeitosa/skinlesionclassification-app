from tensorflow.keras.models import load_model
from pathlib import Path

import os
base_path = os.getcwd() + '/features_extraction'

# Testar com pathlib
def load_inceptionv3():
    # inceptionv3_path = base_path, '\cnn_inceptionv3.h5'
    path = base_path + '/cnn_inceptionv3.h5'
    return load_model(path)
    
def load_resnet50():
    resnet50_path = base_path + '/cnn_resnet50.h5'
    return load_model(str(resnet50_path))

def load_xception():
    xception_path = base_path + '/cnn_xception.h5'
    return load_model(str(xception_path))
    
def load_vgg16():
    vgg16_path = base_path + '/cnn_vgg16.h5'
    return load_model(str(vgg16_path))