<script>
    export let link;
</script>

<nav class="bg-gray-800 p-4">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
        <!-- Logo -->
        <div class="text-white font-bold text-2xl">
            WeatherSense
        </div>
        <!-- Navigation Links -->
        <ul class="flex space-x-4 text-xl">
            <li>
                <a href="{link}" class="text-white hover:text-gray-300">Home</a>
            </li>
            <li>
                <a href="{link}" class="text-white hover:text-gray-300">About</a>
            </li>
            <li>
                <a href="{link}" class="text-white hover:text-gray-300">Services</a>
            </li>
            <li>
                <a href="{link}" class="text-white hover:text-gray-300">Contact</a>
            </li>
        </ul>
    </div>
</nav>
