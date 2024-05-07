<script>
    export let name, dataArray;

    import {Bar, Doughnut} from 'svelte-chartjs';

    import {
        Chart as ChartJS,
        Title,
        Tooltip,
        Legend,
        ArcElement,
        CategoryScale,
    } from 'chart.js';

    ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

    function countComponents(array) {
        const counts = {};
        for (const component of array) {
            counts[component] = (counts[component] || 0) + 1;
        }
        return counts;
    }

    // Example usage:
    const array = dataArray;
    const componentCounts = countComponents(array);

    const data = {
        labels: Object.keys(componentCounts),
        datasets: [
            {
                data: Object.values(componentCounts),
                backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
                hoverBackgroundColor: [
                    '#FF5A5E',
                    '#5AD3D1',
                    '#FFC870',
                    '#A8B3C5',
                    '#616774',
                ],
            },
        ],
    };
</script>

<div class="">
    <div class="container mx-auto mt-4">
        <div class=" mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <div class="px-4 py-5">
                <h2 class="text-2xl font-bold text-gray-800">{name}</h2>
                <Doughnut {data} options={{ responsive: true }} />
            </div>
        </div>
    </div>
</div>

