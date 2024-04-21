import { test, expect } from '@playwright/test';

test("User can go to main page and can click all the button navigation bar.", async ({ page }) => {
  await page.goto('http://localhost:5175/');
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('link', { name: 'History' }).click();
  await page.getByRole('link', { name: 'Github' }).click();
  await page.getByRole('link', { name: 'Contact' }).click();
});

test("User can go to History page and View old weather data and go back to home.", async ({ page }) => {
  await page.goto('http://localhost:5175/');
  await page.getByRole('link', { name: 'History' }).click();
  await page.locator('.inline-block').first().click();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('link', { name: 'History' }).click();
});

test("In home page all data Card component are render.", async ({ page }) => {
  await page.goto('http://localhost:5175/');
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
  await page.goto('http://localhost:5175/');
  await page.getByRole('link', { name: 'History' }).click();
  await page.getByRole('navigation').click();
  await page.locator('.inline-block').first().click();
});

test("In another weather data board Data card must loaded.", async ({ page }) => {
  await page.goto('http://localhost:5175/');
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