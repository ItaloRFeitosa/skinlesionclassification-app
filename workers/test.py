from Predictions import Predictions
from result import process_result
from pprint import pprint
from pathlib import Path

img1 = str(Path("./downloads", "teste2.jpg"))

predictions = Predictions()

results = predictions.run(img1)

processed_results = process_result(results)

pprint(processed_results)
