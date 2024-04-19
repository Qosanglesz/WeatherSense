<script>
    export let link;
</script>

<nav class="bg-gray-800 p-4">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
        <!-- Logo -->
        <div class="text-white font-bold text-3xl">
            WeatherSense
        </div>
        <!-- Navigation Links -->
        <ul class="flex space-x-4 text-xl font-bold">
            <li>
                <a href="{link.home}" class="text-white hover:text-gray-300">Home</a>
            </li>
            <li>
                <a href="{link.history}" class="text-white hover:text-gray-300">History</a>
            </li>
            <li>
                <a href="{link.github}" class="text-white hover:text-gray-300">Github</a>
            </li>
            <li>
                <a href="{link.contact}" class="text-white hover:text-gray-300">Contact</a>
            </li>
        </ul>
    </div>
</nav>
