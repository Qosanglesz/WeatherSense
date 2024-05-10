from machine import Pin
import uasyncio as asyncio
import network
import time
from dht import DHT11
from umqtt.robust import MQTTClient
import json
from config import (
    WIFI_SSID, WIFI_PASS,
    MQTT_BROKER, MQTT_USER, MQTT_PASS
)

DATA_COLLECT_INTERVAL = 600  # 10 minutes (60 seconds * 10)
INPUT_I1 = 32
sensor = DHT11(Pin(INPUT_I1))

red = Pin(2, Pin.OUT)
red.value(1)  # turn red led off
green = Pin(12, Pin.OUT)
green.value(1)  # turn green led off

wlan = network.WLAN(network.STA_IF)
wlan.active(True)
wlan.connect(WIFI_SSID, WIFI_PASS)
print("*** Connecting to WiFi...")
while not wlan.isconnected():
    time.sleep(0.5)
print(f"*** WiFi Connected to {WIFI_SSID}")
red.value(0)  # turn red led on

mqtt = MQTTClient(client_id="",
                  server=MQTT_BROKER,
                  user=MQTT_USER,
                  password=MQTT_PASS)
print("*** Connecting to MQTT broker...")
mqtt.connect()
print(f"*** MQTT broker connected to {MQTT_BROKER} with user: {MQTT_USER}")
green.value(0)  # turn green led on

async def msgR():
    while True:
        try:
            mqtt.check_msg()
        except Exception as e:
            print("Error in MQTT message handling:", e)
            await asyncio.sleep_ms(2000)
            red.value(1)  # turn red led off
            green.value(1)  # turn green led off
        await asyncio.sleep_ms(0)


def sub_callback(topic, payload):
    if topic.decode() == "b6510545748/sensors":
        try:
            pass
        except ValueError:
            pass


async def read_sensor():
    while True:
        try:
            sensor.measure()
            temp = sensor.temperature()
            humid = sensor.humidity()

            print(f"Temperature: {temp} °C, Humidity: {humid} % RH")

            package = {"temperature": temp, "humidity": humid}
            mqtt.publish("b6510545748/sensors", json.dumps(package))
        except Exception as e:
            print("Error in sensor reading:", e)
        await asyncio.sleep(DATA_COLLECT_INTERVAL)


mqtt.set_callback(sub_callback)
mqtt.subscribe("b6510545748/sensors")

asyncio.create_task(msgR())
asyncio.create_task(read_sensor())
asyncio.run_until_complete()
