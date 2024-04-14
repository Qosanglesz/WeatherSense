from flask import Flask, request, jsonify
import pandas as pd
import joblib
import json

# Paths to the trained model and label encoder files
MODEL_PATH = "path/to/your/model.pkl"
LABEL_ENCODER_PATH = "path/to/your/label_encoder.pkl"

# Initialize Flask application
app = Flask(__name__)

# Load the trained model and label encoder
model = joblib.load(MODEL_PATH)
label_encoder = joblib.load(LABEL_ENCODER_PATH)

# Function to transform timestamp data
def time_stamp_transform(dataframe):
    # Convert 'ts' column to datetime
    dataframe['ts'] = pd.to_datetime(dataframe['ts'])
    # Extract day of the week, month, and hour from timestamp
    dataframe['day_of_week'] = dataframe['ts'].dt.dayofweek
    dataframe['month'] = dataframe['ts'].dt.month
    dataframe['hour'] = dataframe['ts'].dt.hour
    # Drop 'weather' and 'ts' columns as they are no longer needed
    dataframe.drop(["weather", "ts"], axis=1, inplace=True)

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
    time_stamp_transform(to_predict)

    # Make predictions using the model
    predictions_encoded = model.predict(to_predict)
    predictions = label_encoder.inverse_transform(predictions_encoded)

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
