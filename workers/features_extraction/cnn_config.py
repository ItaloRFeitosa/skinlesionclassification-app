from .load_cnn_models import *
from tensorflow.keras.applications.inception_v3 import preprocess_input as p_in_inceptionv3
from tensorflow.keras.applications.resnet50 import preprocess_input as p_in_resnet50
from tensorflow.keras.applications.vgg16 import preprocess_input as p_in_vgg16
from tensorflow.keras.applications.xception import preprocess_input as p_in_xception


inceptionv3_config = {
    'cnn_name': 'inceptionv3',
    'cnn_model': load_inceptionv3(),
    'preprocess_input': p_in_inceptionv3,
    'target_size': (299,299)
}
resnet50_config = {
    'cnn_name': 'resnet50',
    'cnn_model': load_resnet50(),
    'preprocess_input': p_in_resnet50,
    'target_size': (224,224)
}
vgg16_config = {
    'cnn_name': 'vgg16',
    'cnn_model': load_vgg16(),
    'preprocess_input': p_in_vgg16,
    'target_size': (299,299)
}
xception_config = {
    'cnn_name': 'xception',
    'cnn_model': load_xception(),
    'preprocess_input': p_in_xception,
    'target_size': (299,299)
}
