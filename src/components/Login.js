import { Component } from 'react';
import {Link} from 'react-router-dom'
import {
    Container, Row, Col,
    Form, FormGroup, Label, Input, Button
} from 'reactstrap';

class Login extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        const postdata = {
            'username': data.get('username'),
            'password': data.get('password')
        }
    }

    render() {
        return (
            <Container className="App banner-color-3 my-5">
                <h2> Sign In </h2>
                <Row>
                    <Col className="w-100">
                        <div className="my-4">
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup row className="mx-1">
                                    <Label for="type">Select Type</Label>
                                    <Input type="select" name="type" id="type">
                                        <option>Organization</option>
                                        <option>Contributer</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup row className="mx-1">
                                    <Label for="username">Username</Label>
                                    <Input type="username" name="username" id="username" placeholder="Username *" required />
                                </FormGroup>
                                <FormGroup row className="mx-1">
                                    <Label for="password">Password</Label>
                                    <Input type="password" name="password" id="password" placeholder="Password *" required />
                                </FormGroup>
                                <div row>
                                    <Link to="/">
                                        <Button className="mx-1">Submit</Button>
                                    </Link>
                                    <Button type="reset" className="mx-1">Reset</Button>
                                    <Button className="mx-1">Sign Up</Button>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Login;
