import {Col} from 'reactstrap'

export default function Company(props) {
    return (
        <Col md="3" className="greyBg text-center mx-3 ">
            <h6>{props.name}</h6>
            <img className="circular mb-3" src={props.img}></img>
            <br></br>
            <p><b>Minimum Investment:</b> {props.min}</p>
            <p><b>Total needed:</b> {props.need}</p>
        </Col>
    )
}