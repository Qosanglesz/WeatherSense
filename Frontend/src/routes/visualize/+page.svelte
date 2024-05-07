<script>

    import Chart from "../../components/LineChart.svelte";

    export let data;

    import {onMount} from 'svelte';
    import {Line} from 'svelte-chartjs';
    import LineChart from "../../components/LineChart.svelte";
    import Histogram from "../../components/Histogram.svelte";
    import TimestampHistory from "../../components/TimestampHistory.svelte";
    import DonutChart from "../../components/DonutChart.svelte";
    import CountPlot from "../../components/CountPlot.svelte";
    import ScatterPlot from "../../components/ScatterPlot.svelte";
    import Footer from "../../components/Footer.svelte";

</script>
<div class="bg-blue-50">
    <div class="grid grid-cols-2 gap-2">
        <div >
            <DonutChart name="WeatherSense" dataArray={data.mergedData.weather_pred}/>
        </div>
        <div>
            <DonutChart name="OpenWeatherAPI" dataArray={data.mergedData.weather}/>
        </div>
    </div>

    <div class="grid grid-cols-4 gap-2">
        <Histogram name="Temperature Sensor °C" dataArray={data.mergedData.temp_sensor} rangeLabel={data.rangeLabel.temp}/>
        <Histogram name="Temperature API °C" dataArray={data.mergedData.temp_api} rangeLabel={data.rangeLabel.temp}/>
        <Histogram name="Cloudiness Percent" dataArray={data.mergedData.cloudiness} rangeLabel={data.rangeLabel.commonPercent}/>
        <Histogram name="Humidity Sensor Percent" dataArray={data.mergedData.humidity_sensor} rangeLabel={data.rangeLabel.commonPercent}/>
        <Histogram name="Humidity API Percent" dataArray={data.mergedData.humidity_api} rangeLabel={data.rangeLabel.commonPercent}/>
        <Histogram name="Wind Speed m/s" dataArray={data.mergedData.wind_speed} rangeLabel={data.rangeLabel.windSpeed}/>
        <Histogram name="Pressure HectoPascal" dataArray={data.mergedData.pressure} rangeLabel={data.rangeLabel.pressure}/>
        <ScatterPlot name="Temperature&Humidity Scatter" dataDict={data.humiditySensorVsAPI}/>
    </div>

    <div class="grid grid-cols-3 gap-2">
        <CountPlot name="Day of Week Average Temperature Sensor" dataDict={data.dayOfWeekAverageTempSensor}/>
        <ScatterPlot name="WeatherSense Vs OpenWeather Temperature" dataDict={data.temperatureSensorVsAPI}/>
        <CountPlot name="Day of Week Average Temperature API" dataDict={data.dayOfWeekAverageTempAPI}/>
        <CountPlot name="Day of Week Average Humidity Sensor" dataDict={data.dayOfWeekAverageHumiditySensor}/>
        <ScatterPlot name="WeatherSense Vs OpenWeather Humidity" dataDict={data.humiditySensorVsAPI}/>
        <CountPlot name="Day of Week Average Humidity API" dataDict={data.dayOfWeekAverageHumidityAPI}/>
    </div>
</div>
<Footer/>