<script>
    import Timestamp from "../components/Timestamp.svelte";

    export let data;
    import Card from "../components/Card.svelte";
    let weather = data.weather[0];
    const prefix = 'Latest update on';

    let temp_error = ((Math.abs(weather.temp_sensor - weather.temp_api)/weather.temp_api) * 100).toFixed(2);
    let humidity_error = ((Math.abs(weather.humidity_sensor - weather.humidity_api)/weather.humidity_api) * 100).toFixed(2);

</script>

<Timestamp timestamp={weather.ts} prefix={prefix}/>

<div class="mx-4">
    <div class="grid grid-cols-2 gap-4">
        <Card title="WeatherSens" value={weather.weather}/>
        <Card title="OpenWeatherMap" value="{weather.weather_pred}"/>
    </div>
    <div class="grid grid-cols-3 gap-4">
        <Card title="Temperature WeatherSense" value={`${weather.temp_sensor} °C`}/>
        <Card title="Temperature OpenWeatherMap" value={`${weather.temp_api} °C`}/>
        <Card title="Temperature Percentage Error" value={`${temp_error} Percent`}/>
        <Card title="Humidity WeatherSense" value={`${weather.humidity_sensor} Percent`}/>
        <Card title="Humidity OpenWeatherMap" value={`${weather.humidity_api} Percent`}/>
        <Card title="Humidity Percentage Error" value={`${humidity_error} Percent`}/>
        <Card title="Cloudiness" value={`${weather.cloudiness} Percent`}/>
        <Card title="Pressure" value={`${weather.pressure} Hectopascal`}/>
        <Card title="Wind Speed" value={`${weather.wind_speed} m/s`}/>
    </div>
</div>
