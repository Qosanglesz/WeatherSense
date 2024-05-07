<script>

    import Chart from "../../components/LineChart.svelte";

    export let data;

    import {onMount} from 'svelte';
    import {Line} from 'svelte-chartjs';
    import LineChart from "../../components/LineChart.svelte";
    import Histogram from "../../components/Histogram.svelte";
    import TimestampHistory from "../../components/TimestampHistory.svelte";

</script>

<div class="grid grid-cols-4 gap-2">
    <Histogram name="Temperature Sensor °C" dataArray={data.mergedData.temp_sensor} rangeLabel={data.rangeLabel.temp}/>
    <Histogram name="Temperature API °C" dataArray={data.mergedData.temp_api} rangeLabel={data.rangeLabel.temp}/>
    <Histogram name="Cloudiness Percent" dataArray={data.mergedData.cloudiness} rangeLabel={data.rangeLabel.commonPercent}/>
    <Histogram name="Humidity Sensor Percent" dataArray={data.mergedData.humidity_sensor} rangeLabel={data.rangeLabel.commonPercent}/>
    <Histogram name="Humidity API Percent" dataArray={data.mergedData.humidity_api} rangeLabel={data.rangeLabel.commonPercent}/>
    <Histogram name="Wind Speed m/s" dataArray={data.mergedData.wind_speed} rangeLabel={data.rangeLabel.windSpeed}/>
    <Histogram name="Pressure HectoPascal" dataArray={data.mergedData.pressure} rangeLabel={data.rangeLabel.pressure}/>
</div>


<LineChart name="Temperature From API"  dataArray={data.mergedData.temp_sensor}/>
