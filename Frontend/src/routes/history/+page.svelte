<script>
    import TimestampHistory from "../../components/TimestampHistory.svelte";

    export let data;
</script>

{#each data.weather as weather}
<TimestampHistory timestamp={weather.ts}/>
{/each}

