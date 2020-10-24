import '../App.css'
import * as V from 'victory'
import React, { useState, useEffect } from 'react'
// import Style from './ChartStyle'

function LineChart(props) {
    const [toShow, setShow] = useState({
        grossRev: true,
        grossExp: true,
    })

    const [color, changeColor] = useState(
        {
            grossRev: '#0000FF',
            grossExp: '#FF0000'
        }
    )

    if (!props.data){
        return(
            <div>Loading...</div>
        )
    }

    const data = props.data


    // useEffect(() => {
    //     setData({
    //         ...data,
    //     })
    // }, [data])

    const changeVisible = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setShow(
            {
                ...toShow,
                [name]: value
            }
        )

    }

    const change = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        if (!value){
            changeColor({
                ...color,
                grossExp: '#00000000'
            })
        }

        else{
            changeColor({
                ...color,
                grossExp: '#FF0000FF'
            })
        }
    }

    return (
        <div className='half'>
            <V.VictoryChart domainPadding={20} padding={{ left: 90, top: 50, right: 10, bottom: 50 }}>
                <V.VictoryLegend x={100}
                    title="Legend"
                    centerTitle
                    orientation="horizontal"
                    gutter={20}
                    style={{ border: { stroke: "black" }, title: { fontSize: 12 } }}
                    data={[
                        { name: "Gross Revenue", symbol: { fill: "lightGreen", type: "star" } },
                        { name: "Expenses", symbol: { fill: color.grossExp, } },
                    ]}
                />
                <V.VictoryGroup data={data.grossRev} color="lightGreen">
                    <V.VictoryLine ></V.VictoryLine>
                    <V.VictoryScatter size={6} symbol="star" />
                </V.VictoryGroup>


                <V.VictoryGroup color={color.grossExp} data={data.grossExp}>
                    <V.VictoryLine ></V.VictoryLine>
                    <V.VictoryScatter size={6} symbol="star" />
                </V.VictoryGroup>
            </V.VictoryChart>

            <label>Show Revenue
            <input name="grossRev" type="checkbox" onChange={change}></input></label>
        </div>
        // data.netProfit === 0 ? <div>loading...</div> : <div>{data.grossExp}, {data.grossRev}, {data.netProfit}</div>
    )
}

export default LineChart