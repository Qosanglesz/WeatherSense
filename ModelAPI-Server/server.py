import json
import pandas as pd

from flask import Flask, request
from preprocessing_functions import *


# Initialize Flask application
app = Flask(__name__)

# API endpoint for making predictions
@app.route('/predict', methods=['POST'])
def predict():
    # Get data from request
    data = request.get_json()
    print(f"json input:\n{data}\n")  # Print the input data for debugging

    # Create DataFrame from the input data
    df = pd.DataFrame(data)

    # Create a copy of the DataFrame to process
    to_predict = df.copy()

    # Transform timestamp data
    preprocessing(to_predict)

    # Make predictions using the model
    predictions_encoded = RANDOM_FOREST_MODEL.predict(to_predict)
    predictions = LABLE_ENCODER_MODEL.inverse_transform(predictions_encoded)

    # Add predicted weather to DataFrame
    df["weather_pred"] = predictions

    # Convert DataFrame to a JSON string
    json_result = json.dumps(df.to_dict(orient="records"))
    print(f"json result:\n{json_result}")  # Print the result for debugging

    # Return the JSON result
    return json_result

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)
