import * as V from 'victory'
import { Pie } from 'react-chartjs-2'

export default function PieChart(props) {

    const options={
        legend: {
            display: false,
        },
    }
    const curData = {
        labels: ['Goal', 'Received'],
        datasets: [
            {
                label: 'Funding stats',
                data: [props.fundingGoal, props.fundingGot],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1,
            },
        ],
    }

    return (
        <Pie options={options} data={curData}></Pie>
        // <span className='half' >


        // <V.VictoryPie data={data}  />

        // </span>
    )
}