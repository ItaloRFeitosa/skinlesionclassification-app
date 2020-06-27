
#
from tensorflow.keras.preprocessing import image
from joblib import load
import numpy as np
import os

from utils import normalize
from features_extraction.load_cnn_models import load_inceptionv3
from features_extraction.FeatureExtractor import FeatureExtractor
from models.Predictor import Predictor

from pathlib import Path


class PredictionWithSVM:

    def __init__(self, feature_extractor):
        self.feature_extractor = feature_extractor
        self.init_svm_predictors()
    
    def init_svm_predictors(self):
        base_name = self.feature_extractor.cnn_name + '_svm_'
        self.svm_linear = Predictor((base_name + 'linear'))
        self.svm_linear_norm = Predictor((base_name + 'linear_norm'))
        self.svm_rbf = Predictor((base_name + 'rbf'))
        self.svm_rbf_norm = Predictor((base_name + 'rbf_norm'))
    
    def run(self, img_path):
        features = self.feature_extractor.extract(img_path)
        normalized_features = normalize(features)

        result_svm_linear = self.svm_linear.predict(features)
        result_svm_linear_norm = self.svm_linear_norm.predict(normalized_features)
        result_svm_rbf = self.svm_rbf.predict(features)
        result_svm_rbf_norm = self.svm_rbf_norm.predict(normalized_features)

        return {
            'svm_linear': result_svm_linear, 
            'svm_linear_norm': result_svm_linear_norm, 
            'svm_rbf': result_svm_rbf, 
            'svm_rbf_norm': result_svm_rbf_norm
            }
