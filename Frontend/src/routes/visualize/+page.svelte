<script>

    import Chart from "../../components/LineChart.svelte";

    export let data;

    import {onMount} from 'svelte';
    import {Line} from 'svelte-chartjs';
    import LineChart from "../../components/LineChart.svelte";

</script>

<div>
    <LineChart name="Temperature From API"  dataArray={data.mergedData.temp_sensor}/>
</div>
