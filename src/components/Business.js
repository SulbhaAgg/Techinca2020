import { useEffect, useState } from "react";
import PieChart from './PieChart'
import { Link } from 'react-router-dom'
import { useRouteMatch } from 'react-router-dom'

import {
    Card,
    CardImg,
    CardImgOverlay,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardColumns,
    CardGroup,
    CardDeck,
    CardLink,
    CardHeader,
    CardFooter,
    Button,
    Row,
    Col,
    Table
} from 'reactstrap';

export default function Business(props) {
    const { url, path } = useRouteMatch()
    return (
        <div>
            <Row  className="greyBg align-items-center">
                <Col className="text-center">
                    <Link className="bizLink" to={`${url}/${props.name}`}>
                        <h2 className="h2">{props.name}</h2>
                    </Link>
                    <img class="bizImg" src={props.img}></img>
                </Col>
                <Col className="text-center">
                    <h3>Funds raised: ${props.fundingGot}</h3>
                    <h3>Funds needed: ${props.fundingGoal}</h3>
                </Col>
                <Col className="linkCont">
                    <Link to={`${url}/${props.name}`}>
                        <Button>Company Page</Button>
                    </Link>
                    <br/>
                    <Button>Contribute</Button>
                </Col>
                <Col md="3">
                    <PieChart fundingGot={props.fundingGot} fundingGoal={props.fundingGoal}></PieChart>
                </Col>
            </Row>
        </div>


        // <Table className="no-wrap v-middle" responsive>

        //     <tbody>
        //         <tr>
        //             <td>
        //                 <div className="d-flex no-block align-items-center">
        //                     <div className="mr-2"><img src={props.img} alt="user" className="rounded-circle" width="45" /></div>
        //                     <div className="">
        //                         <Link to={`${url}/${props.name}`}><h5 className="mb-0 font-16 font-medium">{props.name}</h5></Link></div>
        //                 </div>
        //             </td>
        //             <td><PieChart fundingGot={props.fundingGot} fundingGoal={props.fundingGoal}></PieChart></td>

        //             <td>
        //                 <i className="fa fa-circle text-orange" id="tlp1"></i>

        //             </td>
        //             <td>35</td>
        //             <td className="blue-grey-text  text-darken-4 font-medium">$96K</td>
        //         </tr>
        //     </tbody>
        // </Table>

        // <Row>
        //     <Col xs="12" md="8">
        //         {/* --------------------------------------------------------------------------------*/}
        //         {/* Card-1*/}
        //         {/* --------------------------------------------------------------------------------*/}
        //         <Card>
        //             <CardBody>
        //             <CardImg top width="100%" src={props.img} />
        //                 <CardTitle>Card title</CardTitle>
        //                 <CardSubtitle>Card subtitle</CardSubtitle>
        //                 <CardText>Some quick example text to build on the card title and make up the bulk of the cards content.</CardText>
        //                 <Button>Button</Button>
        //             </CardBody>
        //         </Card>
        //     </Col>
        // </Row>
        // <Card>
        //     <CardImg src={props.img}></CardImg>
        //     <Link className="cardTitle" to={`${url}/${props.name}`}>
        //         <h2>{props.name}</h2>
        //     </Link>
        //     <PieChart fundingGot={props.fundingGot} fundingGoal={props.fundingGoal}></PieChart>
        // </Card>
    )
}