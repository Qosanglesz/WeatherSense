<script>
    import Card from "../components/Card.svelte";
    import Navbar from "../components/Navbar.svelte";

    let link = {};

</script>

<Navbar link={link}/>

<div class="mx-4">
    <div class="grid grid-cols-2 gap-4">
        <Card title="Sensor" value="30 degree Celsius"/>
        <Card title="API" value="30 degree Celsius"/>
    </div>
    <div class="grid grid-cols-3 gap-4">
        <Card title="Sensor" value="30 degree Celsius"/>
        <Card title="API" value="30 degree Celsius"/>
        <Card title="API" value="30 degree Celsius"/>
        <Card title="Sensor" value="30 degree Celsius"/>
        <Card title="API" value="30 degree Celsius"/>
        <Card title="API" value="30 degree Celsius"/>
        <Card title="Sensor" value="30 degree Celsius"/>
        <Card title="API" value="30 degree Celsius"/>
        <Card title="API" value="30 degree Celsius"/>
    </div>
</div>
