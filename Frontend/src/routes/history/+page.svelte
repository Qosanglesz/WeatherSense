<script>
    import TimestampHistory from "../../components/TimestampHistory.svelte";

    export let data;
    let weather = data.weather[0];
</script>

<div class="grid grid-cols-3 gap-1">
    {#each data.weather as weather}
        <TimestampHistory timestamp={weather.ts} link={`/weather/${weather.id}`}/>
    {/each}
</div>

