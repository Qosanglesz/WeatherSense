# WeatherSense

WeatherSense is a weather tracking website that updates weather data and predictions every 10 minutes. Leveraging our trained random forest model, WeatherSense provides accurate forecasts and historical weather information.

The system corrects data using the Ky-015 sensor and integrates with the OpenWeatherMap API to ensure reliability. Node-RED assists in data correction.

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/Qosanglesz/WeatherSense.git
   ```

2. Change directory to ModelAPI-Server

   ```
   cd ModelAPI-Server
   ```

3. Run ModelAPI-Server
   ```
   py ./server.py
   ```

4. Change directory to Backend
   ```
   cd Backend
   ```
5. Create and config.js and edit using config.example.js template
6. Run backend server
   ```
   npm install
   npm run dev
   ```
7. Change directory to Backend
   ```
   cd Frontend
   ```
8. Create and config.js and edit using config.example.js template
9. Run backend server
   ```
   npm install
   npm run dev
   ```
## Endpoint
- ModelAPI-Server
  - /predict : (POST) sent data to model and get predicted data response.
  
- Backend
  - /latest : (GET) sent data to model and get predicted data response.
  - /history : (GET) Get all weather data order by desc.
  - /weather/id : (GET) sent id in params (url) and get weather data by id resposne.
 
- Frontend
  - / : (GET) Web show dashboard latest weather data.
  - /history : (GET) Web show all weather data order by desc.
  - /weather/id : (GET) Web show dashboard latest weather data by id.

## How to run test
1. ## Frontend:

   ```
   cd ./Frontend
   npm run test:ui
   npx playwright test --project=chromium
   ```
1. ## Backend:
   - Test with post man to each endpoint [PostmanTestCode](https://github.com/Qosanglesz/WeatherSense/wiki/Postman-Test-code)

  
