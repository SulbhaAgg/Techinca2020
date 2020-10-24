import '../App.css'

import * as V from 'victory'

function PieChart(){

    const props = [{ x: "Earned", y: 25 },
    { x: "Need", y: 50 },]
    return (
        <V.VictoryPie data={props}></V.VictoryPie>
    )

}

export default PieChart

