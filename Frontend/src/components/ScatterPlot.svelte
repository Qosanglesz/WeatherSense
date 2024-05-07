<script>
    export let name, dataDict;
    import {Bar, Scatter} from 'svelte-chartjs';
    import {
        Chart as ChartJS,
        Title,
        Tooltip,
        Legend,
        LineElement,
        CategoryScale,
        LinearScale,
        PointElement,
    } from 'chart.js';

    ChartJS.register(
        Title,
        Tooltip,
        Legend,
        LineElement,
        CategoryScale,
        LinearScale,
        PointElement
    );

    const data = {
        labels: ['Scatter'],
        datasets: [
            {
                borderColor: 'rgba(99,0,125, .2)',
                backgroundColor: 'rgba(99,0,125, .5)',
                label: 'Point',
                data: dataDict,
            },
        ],
    };

</script>

<div class="">
    <div class="container mx-auto mt-4">
        <div class=" mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <div class="px-4 py-5">
                <h2 class="text-2xl font-bold text-gray-800">{name}</h2>
                <Scatter {data} options={{ responsive: true }} />
            </div>
        </div>
    </div>
</div>

