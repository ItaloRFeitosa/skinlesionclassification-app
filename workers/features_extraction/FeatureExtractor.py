from tensorflow.keras.preprocessing import image
import numpy as np

class FeatureExtractor:
    def __init__(self, cnn_name, cnn_model, preprocess_input, target_size):
        self.cnn_name = cnn_name
        self.cnn_model = cnn_model
        self.preprocess_input = preprocess_input
        self.target_size = target_size

    def extract(self, img_path):
        img = image.load_img(img_path, self.target_size)
        tensor = image.img_to_array(img) 
        tensor = np.expand_dims(tensor, axis=0)
        tensor = self.preprocess_input(tensor)
        return self.cnn_model.predict(tensor).flatten()
