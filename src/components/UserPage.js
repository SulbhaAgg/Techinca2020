import { Container, Row, Col, Button } from "reactstrap";
import Company from "./Company";
import { Link } from 'react-router-dom'

export default function UserPage() {
    return (
        <div>
            <Container className="mt-5 mx-auto">
                <Row className="">
                    <Col className="text-right" >
                        <img className="circular" src="https://media-exp1.licdn.com/dms/image/C4E03AQG-bJ2v4cJ-bA/profile-displayphoto-shrink_400_400/0?e=1609372800&v=beta&t=eR7aIYc5_ConfXZX1TZSubEPkzVkWQ0geoWXMjpOlwA"></img>
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

                    <Link to="/organizations">
                        <Button className="display-8 mx-3">View highlighted businesess</Button>
    
                    </Link>
                </div>

            <Row className="align-center justify-content-center">
                <Company name="Slick" img="https://media-exp1.licdn.com/dms/image/C4D0BAQHHW4ih0rqUBg/company-logo_200_200/0?e=1611792000&v=beta&t=o0G5VyTZIj1Lc8i3yFZOXCp-cW0JSlFJ7SZX9IjLJyQ" min={10} need={1100}></Company>
                <Company name="neop" img="https://media-exp1.licdn.com/dms/image/C560BAQE1rQ2LXr1BKQ/company-logo_200_200/0?e=1611792000&v=beta&t=EQsM6PVVn251lMtBdXw8xQpNhJOAZ9JD5ZcHsMRTmVc" min={20} need={900}></Company>
                <Company name="Skeyetech" img="https://media-exp1.licdn.com/dms/image/C4D0BAQHQYIaB09mcOw/company-logo_200_200/0?e=1611792000&v=beta&t=HIPjqfv6NypFEBbdXk3WZhP4QA77cWNveCllxfNwPBQ" min={20} need={2000}></Company>
                <Company name="incwo" img="https://media-exp1.licdn.com/dms/image/C560BAQHNlMZamYwHlA/company-logo_200_200/0?e=1611792000&v=beta&t=xsCXMvAFHypfsmKPPku_Is5nHq-XQ_j2mD4vy7-F4mQ" min={50} need={5000}></Company>
                <Company name="boredaux" img="https://media-exp1.licdn.com/dms/image/C560BAQED2Z2vp0GIsQ/company-logo_200_200/0?e=1611792000&v=beta&t=KHNiDCR0mYpyxfhU25SDQ4rOcFQZNiv6WTsL2ZxA6jA" min={15} need={9000}></Company>
                <Company name="Addinsoft" img="https://media-exp1.licdn.com/dms/image/C560BAQG7P1F4xLtKPA/company-logo_200_200/0?e=1611792000&v=beta&t=OOklkzF8TUc-BCTiLrc35RsSqHxe38_Nf98DPxwWgnQ" min={80} need={90000}></Company>
            </Row>

            <div className="text-center mx-auto">

                <span className="display-7 mx-3 text-light">Intered businesses</span>
    

            </div>

            <Row className="align-center justify-content-center">
                <Company name="Sense" img="https://media-exp1.licdn.com/dms/image/C4D0BAQEyT7-gkPbVLA/company-logo_200_200/0?e=1611792000&v=beta&t=msQeYh30or8w0mgip1JZFk_jS9ykl88l99KWEV6eXUk" min={10} need={1100}></Company>
                <Company name="Data" img="https://media-exp1.licdn.com/dms/image/C560BAQH03e0VowA5sQ/company-logo_200_200/0?e=1611792000&v=beta&t=L6n0pW72TTwnS7xl4P5TqS1lk-sTyNmI0klYgIzvVPw" min={20} need={900}></Company>
                <Company name="Cedar" img="https://media-exp1.licdn.com/dms/image/C4E0BAQGCa7Nwu6TQ6w/company-logo_200_200/0?e=1611792000&v=beta&t=6lBOaITGQkqTpWvo-BCRUCW4-oVVszPx9Tq9jp_pISo" min={20} need={2000}></Company>
                <Company name="Airkit" img="https://media-exp1.licdn.com/dms/image/C560BAQHzZEL_PNU69g/company-logo_200_200/0?e=1611792000&v=beta&t=X4AElK2iAAropilkb_4DUR-geDssk0OrgJlCeUDzEDg" min={50} need={5000}></Company>
                <Company name="Motiv" img="https://media-exp1.licdn.com/dms/image/C4E0BAQEU7vNz7kIxJw/company-logo_200_200/0?e=1611792000&v=beta&t=fJqI8ulya1z2OIq9q3uKgsUXdNUpBNHblPtIpRdqCNw" min={15} need={9000}></Company>
                <Company name="M49" img="https://media-exp1.licdn.com/dms/image/C560BAQFBLslU58JHlA/company-logo_200_200/0?e=1611792000&v=beta&t=eFfrARW1f42uVUW28XJge4_Um-fpmvM3cGdWMTZssew" min={80} need={90000}></Company>
            </Row>


            </Container>
        </div >
    )
}