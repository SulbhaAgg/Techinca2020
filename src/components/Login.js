import {Component, useState} from 'react';
import { 
    Container, Row, Col,
    Form, FormGroup, Label, Input, Button
 } from 'reactstrap';
 import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
 axios.defaults.xsrfCookieName = 'csrftoken'
 axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"

class Login extends Component {
    constructor() {
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = {
          redirect: localStorage.getItem("token") ? true : false
      }
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        const postdata = {
            'username': data.get('username'),
            'password': data.get('password')
        }

        axios.post("/simplystart/token/login/", postdata)
        .then((response) => {
            console.log(response.data);
            localStorage.setItem("token", response.data.auth_token);
            this.setState({redirect: true});
        });
    }

    render() {
        if(this.state.redirect){
            return <Redirect to='/'/>;
        }
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
                                <Input type="username" name="username" id="username" placeholder="Username *" required/>
                            </FormGroup>
                            <FormGroup row className="mx-1">
                                <Label for="password">Password</Label>
                                <Input type="password" name="password" id="password" placeholder="Password *" required />
                            </FormGroup>
                            <div row>
                                <Link to="/user-page">
                                <Button>Submit</Button>
                                </Link>
                                <Button type="reset" className="mx-1">Reset</Button>
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
