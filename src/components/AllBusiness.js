import { useEffect, useState } from "react";
import Business from "./Business";
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap'

export default function AllBusiness(props) {

    const [isFemale, setIsFemale] = useState("false");
    const [diversity, setDiversity] = useState("");

    if (!props.data) {
        return (
            <div>Loading...</div>
        )
    }

    // let isFemale = false ;
    let isBlack = false ;
    let isKid = false ;
    let isLGBT = false ;
    let isLatin = false ;
    // let diversity = "" ;

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
                    <Button className="link" onClick = {() => {setIsFemale(true);  setDiversity("Female Owned") }}>Female Owned</Button>
                    {/*  {() => { setIsFemale(true), "Female Owned" } }  */}
                    <Button className="link" onClick = { () => {isBlack = true ;  setDiversity("Black Owned") } } >Black Owned</Button>
                    <Button className="link" onClick = { () => { isKid = true ; setDiversity("Kids Owned") } } >Kids Owned</Button>
                    <Button className="link" onClick = { () => { isLGBT = true ;  setDiversity("LGBTQ+ Owned") } } >LGBT+ Owned</Button>
                    <Button className="link" onClick = { () => { isLatin = true ;  setDiversity("LatinX Owned") } } >LatinX Owned</Button>
                    <Button className="link" onClick = { () => { setDiversity("") } } >Show All</Button>
                </Col>
                <Col md="10" >
                    <h1 className="heading">Trending</h1>
                    <div className="group">
                        {props.data.map((item) => (
                            // if item.tags.contains("isFemaleOwned") then display
                            getBusiness(diversity, item) 
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

function getBusiness(diversity, item) {


   // if( diversity === "" )
 //   return 
   // (
  //      <Business tags={item.tags} img={item.img} name={item.name} fundingGoal={item.fundingGoal} fundingGot={item.fundingGot}></Business> 
  //  );
    if (diversity === "" || (item.tags && item.tags.indexOf(diversity) > -1 )){
        return (
            <Business tags={item.tags} img={item.img} name={item.name} fundingGoal={item.fundingGoal} fundingGot={item.fundingGot}></Business> 
        ) ;
    }
    return <div></div>
}
