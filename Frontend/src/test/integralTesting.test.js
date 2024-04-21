import { test, expect } from "vitest";
import { backendRoutes } from "../config.js";

const axios = require("axios");

test("should allow users go to main page", async () => {
    const response = await axios.get(backendRoutes.getLatest);
    expect(response.status).toBe(200);
});

test("should allow users go history page", async () => {
    const response = await axios.get(backendRoutes.getHistory);
    expect(response.status).toBe(200);
});

test("should allow users go weather page (valid ID)", async () => {
    const id = 1;
    const response = await axios.get(`${backendRoutes.getWeatherById}${id}`);
    expect(response.status).toBe(200);
});

test("should not allow users to go to history page with invalid ID", async () => {
    const id = -99;
    try {

        const response = await axios.get(`${backendRoutes.getWeatherById}${id}`);
        expect(response.status).not.toBe(200);

    } catch (error) {
        expect(error.response.status).toBe(404);
    }
});
