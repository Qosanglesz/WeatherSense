<script>
    export let name, dataArray;
    import { Line } from 'svelte-chartjs';

    import {
        Chart as ChartJS,
        Title,
        Tooltip,
        Legend,
        LineElement,
        LinearScale,
        PointElement,
        CategoryScale,
    } from 'chart.js';

    ChartJS.register(
        Title,
        Tooltip,
        Legend,
        LineElement,
        LinearScale,
        PointElement,
        CategoryScale
    );
    let data = {
        labels:  Array.from(new Set(dataArray)).sort(),
        datasets: [
            {
                label: name,
                fill: true,
                lineTension: 0.3,
                backgroundColor: 'rgba(225, 204,230, .3)',
                borderColor: 'rgb(205, 130, 158)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgb(205, 130,1 58)',
                pointBackgroundColor: 'rgb(255, 255, 255)',
                pointBorderWidth: 10,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgb(0, 0, 0)',
                pointHoverBorderColor: 'rgba(220, 220, 220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: dataArray,
            },
        ],
    };
</script>

<div class="">
    <div class="container mx-auto mt-4">
        <div class=" mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <div class="px-4 py-5">
                <h2 class="text-2xl font-bold text-gray-800">{name} Line Graph</h2>
                <Line {data} options={{ responsive: true }} />
            </div>
        </div>
    </div>
</div>