from tensorflow.keras.preprocessing import image
import numpy as np

class FeatureExtractor:

    def __init__(self, cnn_model, target_size, preprocess_input):
        self.cnn_model = cnn_model
        self.target_size = target_size
        if(preprocess_input == 'xception'):
            from tensorflow.keras.applications.xception import preprocess_input

    def extract_features(self, img_path):
        img = image.load_img(img_path, self.target_size)
        tensor = image.img_to_array(img) 
        tensor = np.expand_dims(tensor, axis=0)
        tensor = preprocess_input(tensor)
        return self.cnn_model.predict(tensor).flatten()
