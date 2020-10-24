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
        <div className='half' >


        <V.VictoryPie data={data} />

        </div>
    )
}