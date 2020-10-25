import {Component, useState} from 'react';
import { 
    Container, Row, Col,
    Form, FormGroup, Label, Input, Button
 } from 'reactstrap';
 import axios from 'axios';
import { Redirect } from 'react-router-dom';
 axios.defaults.xsrfCookieName = 'csrftoken'
 axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"

 class Logout extends Component {
    constructor() {
        super();
        this.state = {
            redirect: false
        }
      }
  
    handleClick(event) {
        if(localStorage.getItem("token") ? true : false){
            this.state.redirect= true;
        }
        axios.post("/simplystart/token/logout/", {
            headers:{ Authorization: "Token "+localStorage.getItem("token") }
        })
        .then((response) => {
            localStorage.removeItem("token");
            this.setState({redirect: true});
        });
    }
  
    render() {
        if(this.state.redirect){
            return <Redirect to='/'/>;
        }
        return <Redirect to='/login' />;
    }
  }
export default Logout;
