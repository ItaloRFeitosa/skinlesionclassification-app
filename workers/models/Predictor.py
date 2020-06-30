import numpy as np
from joblib import load
from pathlib import Path

class Predictor:

    def __init__(self, model_name):
        self.model_name = model_name
        path = str(Path('./models', model_name).with_suffix('.joblib'))
        self.classifier = load(path)

    def predict(self, feature):
        #print('[' + self.model_name + '] Predicting ...\n')
        pred = np.ravel(self.classifier.predict_proba(np.reshape(feature, (1, -1))))
        pred = [(round(p,4)*100) for p in pred]
        
        return pred