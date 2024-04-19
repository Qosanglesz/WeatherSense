<script>
    export let timestamp;
    export let link;

    // Create a Date object from the timestamp string
    const dateObject = new Date(timestamp);

    // Set the timezone to Thailand (Asia/Bangkok)
    const options = {
        timeZone: 'Asia/Bangkok',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    };

    // Format the date according to the specified timezone
    const formattedDateTime = dateObject.toLocaleString('en-US', options);
    const context = `Data on ${formattedDateTime}`
</script>

<div>
    <div class="mx-4 mt-4">
        <div class="mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <div class="px-4 py-5 flex justify-between">
                <p class="text-gray-800 text-xl pt-3 font-bold">{context}</p>
                <a href={link} class="inline-block bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900 transition duration-300">View</a>
            </div>
        </div>
    </div>
</div>
