<script>
    export let name, dataArray, rangeLabel;

    import {Bar, Line} from 'svelte-chartjs';
    import {
        Chart,
        Title,
        Tooltip,
        Legend,
        BarElement,
        CategoryScale,
        LinearScale,
    } from 'chart.js';

    Chart.register(
        Title,
        Tooltip,
        Legend,
        BarElement,
        CategoryScale,
        LinearScale
    );

    function countFrequencyInRanges(array, ranges) {
        const counts = {};
        for (const range of ranges) {
            const [min, max] = range;
            counts[`${min}-${max}`] = 0;
            for (const num of array) {
                if (num >= min && num <= max) {
                    counts[`${min}-${max}`]++;
                }
            }
        }
        return counts;
    }

    const ranges = rangeLabel;
    const frequencies = countFrequencyInRanges(dataArray, ranges);

    const data = {
        labels: Object.keys(frequencies),
        datasets: [
            {
                label: 'frequencies',
                data: frequencies,
                backgroundColor: [
                    'rgba(255, 134,159,0.4)',
                    'rgba(98,  182, 239,0.4)',
                    'rgba(255, 218, 128,0.4)',
                    'rgba(113, 205, 205,0.4)',
                    'rgba(170, 128, 252,0.4)',
                    'rgba(255, 177, 101,0.4)',
                ],
                borderWidth: 2,
                borderColor: [
                    'rgba(255, 134, 159, 1)',
                    'rgba(98,  182, 239, 1)',
                    'rgba(255, 218, 128, 1)',
                    'rgba(113, 205, 205, 1)',
                    'rgba(170, 128, 252, 1)',
                    'rgba(255, 177, 101, 1)',
                ],
            },
        ],
    };
</script>

<div class="">
    <div class="container mx-auto mt-4">
        <div class=" mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <div class="px-4 py-5">
                <h2 class="text-2xl font-bold text-gray-800">{name} Histogram</h2>
                <Bar {data} options={{ responsive: true }} />
            </div>
        </div>
    </div>
</div>
