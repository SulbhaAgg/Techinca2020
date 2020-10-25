import '../App.css'
import * as V from 'victory'
import React, { useState, useEffect } from 'react'
// import Style from './ChartStyle'
import { Line } from 'react-chartjs-2';
import { Col, Row } from 'reactstrap'

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

    if (!props.data) {
        return (
            <div>Loading...</div>
        )
    }

    const data = props.data

    let lineData = {
        labels: props.years,
        datasets: [{
            label: 'Expenses',
            borderWidth: 1,
            backgroundColor: 'rgba(94,114,228,.1)',
            borderColor: 'rgb(94,114,228)',
            pointBorderColor: 'rgb(94,114,228)',
            pointBackgroundColor: 'rgb(94,114,228)',
            data: data.grossExp
        }, {
            label: 'Revenue',
            borderWidth: 1,
            backgroundColor: 'rgba(79,195,247,.1)',
            borderColor: 'rgb(79,195,247)',
            pointBorderColor: 'rgb(79,195,247)',
            pointBackgroundColor: 'rgb(79,195,247)',
            data: data.grossRev
        }]
    }

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

        if (!value) {
            changeColor({
                ...color,
                grossExp: '#00000000'
            })
        }

        else {
            changeColor({
                ...color,
                grossExp: '#FF0000FF'
            })
        }
    }

    return (
        <div>
            {/* <V.VictoryChart domainPadding={20} padding={{ left: 90, top: 50, right: 10, bottom: 50 }}>
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
            </V.VictoryChart> */}
            <Row>
                <Col lg="12" className="greyBg">
                    <div className="campaign ct-charts ">
                        <div className="chart-wrapper" style={{ width: '100%', margin: '0 auto', height: 250 }}>
                            <Line data={lineData} options={{ maintainAspectRatio: false, legend: { display: true, labels: { fontFamily: "Quicksand" } }, scales: { yAxes: [{ stacked: true, gridLines: { display: false }, ticks: { fontFamily: "Quicksand" } }], xAxes: [{ gridLines: { display: false }, ticks: { fontFamily: "Quicksand" } }] } }} />
                        </div>
                    </div>
                </Col>
            </Row>
        </div >
        // data.netProfit === 0 ? <div>loading...</div> : <div>{data.grossExp}, {data.grossRev}, {data.netProfit}</div>
    )
}

export default LineChart