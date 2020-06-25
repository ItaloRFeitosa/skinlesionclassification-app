from PredictionWithSVM import PredictionWithSVM
from features_extraction.FeatureExtractor import FeatureExtractor
from features_extraction.cnn_config import inceptionv3_config, resnet50_config, vgg16_config, xception_config
from pprint import pprint
from pathlib import Path

img1 = str(Path("./downloads", "teste.jpg"))
img2 = str(Path("./downloads", "teste.jpg"))
img3 = str(Path("./downloads", "teste.jpg"))

inceptionv3_feature_extractor = FeatureExtractor( **inceptionv3_config )
vgg16_feature_extractor = FeatureExtractor( **vgg16_config )
resnet50_feature_extractor = FeatureExtractor( **resnet50_config )
xception_feature_extractor = FeatureExtractor( **xception_config )

def run_prediction(img_path, features_extractor):
    
    prediction_with_svm = PredictionWithSVM(features_extractor)

    result = prediction_with_svm.start(img_path)

    print('[' + features_extractor.cnn_name + ' Result]')
    pprint(result)
    print()

    return result


run_prediction(img1, resnet50_feature_extractor)
