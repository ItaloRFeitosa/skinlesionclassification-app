from features_extraction.cnn_config import inceptionv3_config
from features_extraction.cnn_config import resnet50_config
from features_extraction.cnn_config import xception_config
from features_extraction.cnn_config import vgg16_config
from features_extraction.FeatureExtractor import FeatureExtractor
from PredictionWithSVM import PredictionWithSVM

def init_predictors(features_extractor_config):
        features_extractor = FeatureExtractor(**features_extractor_config)
        cnn_svm_predictors = PredictionWithSVM(features_extractor)
        return cnn_svm_predictors

class Predictions:
    def __init__(self):
        self.inceptionv3_svm_predictors = init_predictors(inceptionv3_config)
        self.resnet50_svm_predictors = init_predictors(resnet50_config)
        self.vgg16_svm_predictors = init_predictors(vgg16_config)
        self.xception_svm_predictors = init_predictors(xception_config)

    def run(self, img_path):
        
        results_inceptionv3 = self.inceptionv3_svm_predictors.run(img_path)
        results_resnet50 = self.resnet50_svm_predictors.run(img_path)
        results_vgg16 = self.vgg16_svm_predictors.run(img_path)
        results_xception = self.xception_svm_predictors.run(img_path)
        
        return {
            "inceptionv3": results_inceptionv3,
            "resnet50": results_resnet50,
            "vgg16": results_vgg16,
            "xception": results_xception,
        }