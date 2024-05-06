import pandas as pd
import joblib

RANDOM_FOREST_MODEL = joblib.load(".\my-model\model.pkl")
LABLE_ENCODER_MODEL = joblib.load(".\my-model\label_encoder_model.pkl")
STANDARD_SCALER_MODEL = joblib.load(".\my-model\standard_scaler_model.pkl")
PCA_MODEL = joblib.load(".\my-model\pca_model.pkl")

def convert_timestamp(dataframe):
    dataframe["ts"] = pd.to_datetime(dataframe["ts"])
    dataframe["day_of_week"] = dataframe["ts"].dt.dayofweek
    dataframe["month"] = dataframe["ts"].dt.month
    dataframe["hour"] = dataframe["ts"].dt.hour
    dataframe.drop("ts", axis=1, inplace=True)
    return None

def preprocessing(dataframe):
    convert_timestamp(dataframe=dataframe)
    dataframe.drop("weather", axis=1, inplace=True)
    dataframe = STANDARD_SCALER_MODEL.transform(dataframe)
    dataframe = PCA_MODEL.transform(dataframe)
    dataframe = pd.DataFrame(dataframe)
    return dataframe
