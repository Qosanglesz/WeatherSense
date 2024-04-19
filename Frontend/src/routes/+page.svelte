<script>
    import Timestamp from "../components/Timestamp.svelte";

    export let data;
    import Card from "../components/Card.svelte";
    let weather = data.weather[0];

</script>


<Timestamp timestamp={weather.ts}/>

<div class="mx-4">
    <div class="grid grid-cols-2 gap-4">
        <Card title="WeatherSens" value={weather.weather}/>
        <Card title="OpenWeatherMap" value="{weather.weather_pred}"/>
    </div>
    <div class="grid grid-cols-3 gap-4">
        <Card title="Temperature WeatherSense" value={`${weather.temp_sensor} °C`}/>
        <Card title="Temperature OpenWeatherMap" value={`${weather.temp_api} °C`}/>
        <Card title="Pressure" value={`${weather.pressure} Hectopascal`}/>
        <Card title="Humidity WeatherSense" value={`${weather.humidity_sensor} Percent`}/>
        <Card title="Humidity OpenWeatherMap" value={`${weather.humidity_api} Percent`}/>
        <Card title="Wind Speed" value={`${weather.wind_speed} m/s`}/>
        <Card title="Cloudiness" value={`${weather.cloudiness} Percent`}/>
        <Card title="API" value="30 degree Celsius"/>
        <Card title="API" value="30 degree Celsius"/>
    </div>
</div>
