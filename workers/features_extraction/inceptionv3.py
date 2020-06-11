
from tensorflow.keras.models import load_model
from tensorflow.keras.applications.inception_v3 import preprocess_input
#
from tensorflow.keras.preprocessing import image
from joblib import load
import numpy as np
import os

def normalizar(x):
    x_mean = np.mean(x)
    x_std = np.std(x)
    x = (x - x_mean)/x_std
    return x

def path_to_tensor(img_path):
    img = image.load_img(img_path, target_size=(299, 299))
    x = image.img_to_array(img) 
    x = np.expand_dims(x, axis=0)
    x = preprocess_input(x)
    
    return x

def extract_features(path):
    tensor = path_to_tensor(path)
    inceptionv3_model = load_model(os.getcwd() + '/features_extraction/cnn_inceptionv3.h5')
    feature = inceptionv3_model.predict(tensor).flatten()

    return feature


def svm(imgpath, modelspath, kernel, normalizado):

    feature = extract_features(imgpath)
    if (kernel == 'rbf'):
        if normalizado:
            feature = normalizar(feature)
            clf = load(modelspath + "\\inceptionv3_svm_rbf_norm.joblib")
        else:
            clf = load(modelspath + "\\inceptionv3_svm_rbf.joblib")
    
    elif (kernel == 'linear'):
        if normalizado:
            feature = normalizar(feature)
            clf = load(modelspath + "\\inceptionv3_svm_linear_norm.joblib")
        else:
            clf = load(modelspath + "\\inceptionv3_svm_linear.joblib")

    pred = np.ravel(clf.predict_proba(np.reshape(feature, (1, -1))))
    pred = [(round(p,4)*100) for p in pred]
    return pred
