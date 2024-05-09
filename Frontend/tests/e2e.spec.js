import { test, expect } from '@playwright/test';

const url = 'http://localhost:5173/'

test("User can go to main page and can click all the button navigation bar.", async ({ page }) => {
  await page.goto(url);
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('link', { name: 'History' }).click();
  await page.getByRole('link', { name: 'Github' }).click();
  await page.getByRole('link', { name: 'Contact' }).click();
});

test("User can go to History page and View old weather data and go back to home.", async ({ page }) => {
  await page.goto(url);
  await page.getByRole('link', { name: 'History' }).click();
  await page.locator('.inline-block').first().click();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('link', { name: 'History' }).click();
});

test("In home page all data Card component are render.", async ({ page }) => {
  await page.goto(url);
  await page.getByRole('navigation').click();
  await page.getByRole('heading', { name: 'WeatherSens', exact: true }).click();
  await page.getByRole('heading', { name: 'OpenWeatherMap', exact: true }).click();
  await page.getByRole('heading', { name: 'Temperature WeatherSense' }).click();
  await page.getByRole('heading', { name: 'Temperature OpenWeatherMap' }).click();
  await page.getByRole('heading', { name: 'Temperature Percentage Error' }).click();
  await page.getByRole('heading', { name: 'Humidity WeatherSense' }).click();
  await page.getByRole('heading', { name: 'Humidity OpenWeatherMap' }).click();
  await page.getByRole('heading', { name: 'Humidity Percentage Error' }).click();
  await page.getByRole('heading', { name: 'Cloudiness' }).click();
  await page.getByRole('heading', { name: 'Pressure' }).click();
  await page.getByRole('heading', { name: 'Wind Speed' }).click();
});

test("In history page View button must loaded.", async ({ page }) => {
  await page.goto(url);
  await page.getByRole('link', { name: 'History' }).click();
  await page.getByRole('navigation').click();
  await page.locator('.inline-block').first().click();
});

test("In another weather data board Data card must loaded.", async ({ page }) => {
  await page.goto(url);
  await page.getByRole('link', { name: 'History' }).click();
  await page.locator('.inline-block').first().click();
  await page.getByRole('navigation').click();
  await page.getByRole('heading', { name: 'WeatherSens', exact: true }).click();
  await page.getByRole('heading', { name: 'OpenWeatherMap', exact: true }).click();
  await page.getByRole('heading', { name: 'Temperature WeatherSense' }).click();
  await page.getByRole('heading', { name: 'Temperature OpenWeatherMap' }).click();
  await page.getByRole('heading', { name: 'Temperature Percentage Error' }).click();
  await page.getByRole('heading', { name: 'Humidity WeatherSense' }).click();
  await page.getByRole('heading', { name: 'Humidity OpenWeatherMap' }).click();
  await page.getByRole('heading', { name: 'Humidity Percentage Error' }).click();
  await page.getByRole('heading', { name: 'Cloudiness' }).click();
  await page.getByRole('heading', { name: 'Pressure' }).click();
  await page.getByRole('heading', { name: 'Wind Speed' }).click();
});

test('Visualize page must render all component', async ({ page }) => {
  await page.goto(url);
  await page.getByRole('link', { name: 'Data Visualize' }).click();
  await page.getByRole('heading', { name: 'WeatherSense', exact: true }).click();
  await page.getByRole('heading', { name: 'OpenWeatherAPI' }).click();
  await page.getByRole('heading', { name: 'Temperature Sensor °C' }).click();
  await page.getByRole('heading', { name: 'Temperature API °C Histogram' }).click();
  await page.getByRole('heading', { name: 'Cloudiness Percent Histogram' }).click();
  await page.getByRole('heading', { name: 'Humidity Sensor Percent' }).click();
  await page.getByRole('heading', { name: 'Humidity API Percent Histogram' }).click();
  await page.getByRole('heading', { name: 'Wind Speed m/s Histogram' }).click();
  await page.getByRole('heading', { name: 'Pressure HectoPascal Histogram' }).click();
  await page.getByRole('heading', { name: 'Temperature&Humidity Scatter' }).click();
  await page.getByRole('heading', { name: 'Day of Week Average Temperature Sensor' }).click();
  await page.getByRole('heading', { name: 'WeatherSense Vs OpenWeather Temperature' }).click();
  await page.getByRole('heading', { name: 'Day of Week Average Temperature API' }).click();
  await page.getByRole('heading', { name: 'Day of Week Average Humidity Sensor' }).click();
  await page.getByRole('heading', { name: 'WeatherSense Vs OpenWeather Humidity' }).click();
  await page.getByRole('heading', { name: 'Day of Week Average Humidity API' }).click();
});
