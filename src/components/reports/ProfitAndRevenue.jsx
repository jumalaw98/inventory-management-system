import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom',
        },
        title: {
            display: true,
            text: 'Profit and revenue',
        },
    },
};




const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'revenue',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        },

        {
            label: 'profits',
            data: [35, 69, 70, 91, 46, 65, 50],
            fill: false,
            borderColor: 'rgb(255, 99, 132)',
            tension: 0.1
        },



    ]
};


const ProfitAndRevenue = () => {
    return <Line options={options} data={data} />;
}


export default ProfitAndRevenue;
