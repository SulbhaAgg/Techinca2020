import * as V from 'victory'

export default function PieChart(props) {

    const data = [
        {
            x: 'Made',
            y: props.fundingGot
        },
        {
            x: 'Goal',
            y: props.fundingGoal
        }
    ]

    return (
        <span className='half' >


        <V.VictoryPie data={data}  />

        </span>
    )
}