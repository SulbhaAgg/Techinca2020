import { Container, Row, Col, Button } from "reactstrap";
import Company from "./Company";
import { Link } from 'react-router-dom'

export default function UserPage() {
    return (
        <div>
            <Container className="mt-5 mx-auto">
                <Row className="d-flex">
                    <Col className="align-self-center" md="3">
                        <img className="circular" src="https://ca.slack-edge.com/T01B9HM9QE4-U01D205N2GN-a9702256f61f-512"></img>
                    </Col>
                    <Col className="align-self-center">
                        <h2 className="align-self-center display-6 text-light">Rhea Manuel</h2>
                    </Col>
                </Row>

                <Row>
                    <Col className="greyBg mr-5">
                        <h6>Total Invested</h6>
                        <hr />
                        <h6 className="display-6">$120</h6>
                    </Col>
                    <Col className="greyBg">
                        <h6>Favorite Organization</h6>
                        <hr />
                        <h6 className="display-6">LoveBug</h6>
                    </Col>
                </Row>

                <div className="text-center mx-auto">

                    <Link  to="/organizations">
                        <Button className="display-6 mx-3">View highlighted businesess</Button>
                    </Link>
                </div>

                <Row className="align-center justify-content-center">
                    <Company name="Slick" img="https://images.unsplash.com/photo-1603478210936-c720b6cdbf61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60" min={10} need={1100}></Company>
                    <Company name="neop" img="https://images.unsplash.com/photo-1603486000993-06849ef87b94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60" min={20} need={900}></Company>
                    <Company name="Skeyetech" img="https://images.unsplash.com/photo-1603329470128-074eaf2939e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60" min={20} need={2000}></Company>
                    <Company name="incwo" img="https://images.unsplash.com/photo-1603486000842-cdb3f4091f5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60" min={50} need={5000}></Company>
                    <Company name="boredaux" img="https://images.unsplash.com/photo-1603472209384-40892d3b2776?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60" min={15} need={9000}></Company>
                    <Company name="Addinsoft" img="https://images.unsplash.com/photo-1603485099570-e55c62559fcd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60" min={80} need={90000}></Company>
                </Row>

            </Container>
        </div>
    )
}