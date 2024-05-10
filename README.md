# WeatherSense

## Team members
1.  Wissarut Kanasub 6510545721 Software and Knowledge Engineering student
2.  sukprachoke Leelapisuth 6510545748 Software and Knowledge Engineering student

## Overview
 WeatherSense is a weather tracking website that updates weather data and classification every 10 minutes. Leveraging our trained random forest classification model, WeatherSense provides accurate classification and historical weather information.

 The system corrects data using the Ky-015 sensor and integrates with the OpenWeatherMap API to ensure reliability. Node-RED assists in data correction.

 ## Features
 - Display latest weather data every 10 minutes
 - Display type of waether that classcification by Our model
 - Display old weather data
 - Weather data visualization

 ## Web Preview
 ![image](https://github.com/Qosanglesz/WeatherSense/assets/114909150/0781fd07-7c46-49ad-a313-13c3adc9f48d)

 ## Domain Model
 ![image](https://github.com/Qosanglesz/WeatherSense/assets/114909150/9753813d-357b-432a-8237-bdb8e40ee7ee)
 ![image](https://github.com/Qosanglesz/WeatherSense/assets/114909150/008d0ce1-a382-4b86-9bd1-24f83cd50dc9)

 ## SequenceDiagram
 ![image](https://github.com/Qosanglesz/WeatherSense/assets/114909150/4e54b93f-8a68-4e56-8b0f-855dd7a22606)
 
 [See more in Wiki](https://github.com/Qosanglesz/WeatherSense/wiki/SequenceDiagram)
 
 ## UseCase and UseCase diagram: [Wiki](https://github.com/Qosanglesz/WeatherSense/wiki/UseCase)

 ## Database Schema
 ![image](https://github.com/Qosanglesz/WeatherSense/assets/114909150/6e607718-e6c6-4b08-ae39-4ecca996ee40)

 ## Tools or Dependencies
 - ### Frontend
    - [Sveltekit Framework](https://kit.svelte.dev/)
    - [Svelte](https://svelte.dev/) (4.2.7)
    - [TailWindCSS](https://tailwindcss.com/)
    - [Axios](https://axios-http.com/)
    - [chartJS](https://www.chartjs.org/)
 - ### Backend
    - [ExpressJS](https://expressjs.com/) (4.19.2)
    - [Axios](https://axios-http.com/)
    - [Moment-timezone](https://momentjs.com/timezone/)
    - [MySQL](https://www.mysql.com/)
- ### ModelAPI-Server
    - [Flask](https://flask.palletsprojects.com/)
    - [Pandas](https://pandas.pydata.org/)
- ### Testing
    - [Vitest](https://vitest.dev/) : For Frontend unit testing and integration testing.
    - [Playwright](https://playwright.dev/) : For Frontend E@E testing.
    - [Postman](https://www.postman.com/): For API Testing.
- ### Correcting Data
    - [KY-015](https://arduinomodules.info/ky-015-temperature-humidity-sensor-module/): Sensor for correct temperature and humidity data
    - [Kidbright](https://kid-bright.org/): Use with KY-015
    - [NodRED](https://nodered.org/)

## Installation

1. ### Clone the repository or download zip file:
    - #### !! WeatherSense-DataAnalytics is (optionals) if you want to know how we trained a machine learning model.

   ```js
   git clone https://github.com/Qosanglesz/WeatherSense.git

   git clone https://github.com/Qosanglesz/WeatherSense-DataAnalytics
   ```
   Go in to WeatherSense directory
   ```js
   cd WeatherSense
   ```

2. ### Running ModelAPI-Server
    Go in to ModelAPI-Server directory
   ```js
   cd ModelAPI-Server
   ```
   Install all dependency
   ```
   pip install -r requirements.txt
   ```
    Start Server.py
   ```
   py ./server.py
   ```

3. ### Running Backend Server
   ```js
   cd ./Frontend
   ```
   Create config.js by using config.example.js
   ```js
    // Example config.js

    module.exports = {
        port: "Your port.",
        database: {
            host: 'Your host.',
            user: 'Your user.',
            password: 'Your password.',
            database: 'Your database.',
            port: 'Your database port.',
        },
        modelPath: {
            predictPath: 'Path.'
        }

    };
   ```
   Install dependency and Start server
   ```
   npm install
   npm run dev
   ```
4. ### Running Frontend Server
    ```js
   cd ./Backend
   ```
   Create config.js by using config.example.js in "./Frontend/src" Example below
   ```js
    // config.js
    export const backendRoutes = {
        getLatest: "http://localhost:3000/latest",
        getHistory: "http://localhost:3000/history",
        getWeatherById: "http://localhost:3000/weather/"
    };
   ```
   Install dependency and Start server
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
  - /history : (GET) Web show all weather data order by DESC.
  - /weather/id : (GET) Web show dashboard latest weather data by id.

## How to run test
1. ## Frontend:

   ```
   cd ./Frontend
   npm run test:ui or npm run test
   npx playwright test --project=chromium
   ```
1. ## Backend and ModelAPI-Server:
   - Test with post man to each endpoint [PostmanTestCode](https://github.com/Qosanglesz/WeatherSense/wiki/Postman-Test-code)

  
