<script>
    import "../app.css";
    import Navbar from "../components/Navbar.svelte";
    let link = {
        home: "/",
        github: "https://github.com/Qosanglesz/WeatherSense",
        history: "history",
        contact: "https://github.com/Qosanglesz",
        visualize: "visualize"
    };

</script>

<Navbar link={link}/>
<slot />
