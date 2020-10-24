import { useEffect, useState } from "react";
import Business from "./Business";
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap'

export default function AllBusiness(props) {

    if (!props.data) {
        return (
            <div>Loading...</div>
        )
    }


    return (
        <Container>
            <Row>
                <Col className="tags">

                    <Form>
                        <FormGroup>
                            <Label for="searchTags" className="heading search">Filter</Label>
                            <Input type="text" name="searchTags" id="searchTags" placeholder="Search Tags" />
                        </FormGroup>
                    </Form>

                    <h2 className="heading"> Tags </h2>
                    <br />
                    <Button className="link">Female Owned</Button>
                    <Button className="link">Minority Owned</Button>
                    <Button className="link">LGBT+ Owned</Button>
                </Col>
                <Col md="10" >
                    <h1 className="heading">Trending</h1>
                    <div className="group">
                        {props.data.map((item) => (
                            <Business img={item.img} name={item.name} fundingGoal={item.fundingGoal} fundingGot={item.fundingGot}></Business>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}