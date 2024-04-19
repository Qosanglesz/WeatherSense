<script>
    import "../app.css";
    import Navbar from "../components/Navbar.svelte";
    let link = {
        home: "/",
        github: "https://github.com/Qosanglesz/WeatherSense",
        service: "#",
        contact: "https://github.com/Qosanglesz"
    };

</script>

<Navbar link={link}/>
<slot />
