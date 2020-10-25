import LineChart from './LineChart'
import { useParams, NavLink, Route, useRouteMatch, useHistory } from 'react-router-dom'
import { Row, Col, Button, Container } from 'reactstrap'
import { Pie } from 'react-chartjs-2'


function ChartPage(props) {

    const { id } = useParams()
    const { url, path } = useRouteMatch()

    if (!props.data) {
        return (
            <div>Loading...</div>
        )
    }
    const curBiz = props.data.find(it => {
        return it.name == id
    }) || {}

    const pieData = []

    const data = {
        labels: ['Goal', 'Received'],
        datasets: [
            {
                label: 'Funding Stats',
                data: [props.data.fundingGoal, props.data.fundingGot],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            },
        ]
    }

    const curData = {
        labels: ['Goal', 'Received'],
        datasets: [
            {
                label: 'Funding stats',
                data: [curBiz.fundingGoal, curBiz.fundingGot],
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

    console.log(curBiz)

    return (
        <Container>
            <Row className="d-flex py-4 flex-row mx-auto align-items-center justify-content-center">
                <Col className="mx-auto text-center">
                    <Button>Contribute</Button>
                </Col>
                <Col>
                    <h1 className="text-light display-6 text-center">{curBiz.name}</h1>
                </Col >
                <Col className="mx-auto text-center">
                    <Button>Progress</Button>
                </Col>
            </Row>

            <Container className="mx-auto py-2 mb-3 px-5 greyBg ">

                <Row className="align-items-center">

                    <Col className="text-center rounded">
                        <img className="rounded-circle shadow" src={curBiz.img}></img>
                    </Col>
                    <Col className="py-2">
                        <h2 className="display-6 text-center">About</h2>
                        <p className="lead ">{curBiz.about}</p>
                    </Col>
                </Row>
            </Container>


            <Container className="mx-auto greyBg align-items-center">

                <h2 className="display-6 text-center">Statistics</h2>

                <Row className="align-items-center">
                    <Col className="text-center py-4">
                        <Pie data={curData}></Pie>
                    </Col>
                    <Col>
                        <div className="">
                            <LineChart data={curBiz}></LineChart>
                        </div>
                    </Col>
                </Row>

            </Container>

            <Container className="mx-auto greyBg align-items-center">

                <Row className="align-items-center">
                    <Col className="text-center py-4">
                        <h3>Funding Received:</h3>
                        <h6 className="display-6">${curBiz.fundingGot}</h6>
                        <hr></hr>
                        <h3>Funding Needed:                        </h3>
                        <h6 className="display-6">${curBiz.fundingGoal}</h6>
                    </Col>
                    <Col className="text-center">
                        <h6 className="display-6">Support:</h6>
                        <Button className="w-50">Contribute</Button>
                        <br></br>
                        <Button className="w-50">Learn More</Button>
                    </Col>
                </Row>

            </Container>
        </Container>

    )
}

export default ChartPage