import '../App.css'
import * as V from 'victory'
import React, { useState, useEffect } from 'react'
import Style from './ChartStyle'

function LineChart() {
    const [toShow, setShow] = useState({
        grossRev: true,
        grossExp: true,
        netProfit: true
    })

    const [data, setData] = useState({
        grossRev: [
            {
                x: '2015',
                y: 200000
            },
            {
                x: '2016',
                y: 300000
            },
            {
                x: '2018',
                y: 400000
            }
        ],
        grossExp: [
            {
                x: '2015',
                y: 100000
            },
            {
                x: '2016',
                y: 200000
            },
            {
                x: '2018',
                y: 300000
            }
        ],
    })

    useEffect(() => {
        setData({
            ...data,
        })
    }, [data])

    const changeVisible = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setShow({
            ...toShow,
            [name]: value
        })
    }


    return (
        <div className='half'>
            
            <V.VictoryChart theme={Style} domainPadding={20} padding={{ left: 90, top: 50, right: 10, bottom: 50 }}>
            <V.VictoryLegend x={100}
                    title="Legend"
                    centerTitle
                    orientation="horizontal"
                    gutter={20}
                    style={{ border: { stroke: "black" }, title: { fontSize: 12 } }}
                    data={[
                        { name: "Gross Revenue", symbol: { fill: "lightGreen", type: "star" } },
                        { name: "Expenses", symbol: { fill: "tomato" } },
                    ]}
                />
                <V.VictoryGroup data={data.grossRev} color="lightGreen">
                <V.VictoryLine ></V.VictoryLine>
                </V.VictoryGroup>
                
                {toShow.grossRev && <div className='hide'>
                    <V.VictoryGroup color="tomato" data={data.grossExp}>
                    <V.VictoryLine></V.VictoryLine>
                    </V.VictoryGroup> </div>}
                
            </V.VictoryChart>

            <label>Show Revenue
            <input name="grossRev" type="checkbox" onChange={changeVisible}></input></label>
        </div>
        // data.netProfit === 0 ? <div>loading...</div> : <div>{data.grossExp}, {data.grossRev}, {data.netProfit}</div>
    )
}

export default LineChart