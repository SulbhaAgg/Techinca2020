import { Form, FormGroup, Input, InputGroup, InputGroupAddon, Label, Button } from "reactstrap";
import { useParams, useRouteMatch, Redirect, Link } from 'react-router-dom'
import { useState } from "react";

export default function Contribute(props) {

    const { id } = useParams()
    const { url, path } = useRouteMatch()

    

    const [data, setData] = useState({
        amt: 0,
    })

    if (!props.data) {
        return (
            <div>Loading...</div>
        )
    }


    const curBiz = props.data.find(it => {
        return it.name == id
    }) || {}

    const handleSubmit = (evt) => {
        evt.preventDefault()
    }

    const handleChange = (evt) => {

        const name = evt.target.name
        const value = evt.target.value

        setData({
            ...data,
            [name]: value
        })
    }

    return (
        <div className="pt-4">
            <h6 className="display-6 text-white text-center">You are investing in {curBiz.name}.</h6>
            <Form className="w-50 mx-auto greyBg" onSubmit={handleSubmit}>

                <FormGroup>
                    <Label>Name</Label>
                    <InputGroup>

                        <Input name="name" onChange={handleChange} placeholder="Full Name"></Input>
                    </InputGroup>
                </FormGroup>
                <br />

                <FormGroup>
                    <Label>Credit Card</Label>
                    <Input name="cc" onChange={handleChange} placeholder="Credit card #" type="number"></Input>
                    <br />
                </FormGroup>

                <FormGroup>
                    <Label>Zip Code</Label>
                    <Input name="zip" onChange={handleChange} placeholder="Zipcode"></Input>
                </FormGroup>

                <br/>

                <FormGroup>
                <Label>Investment Amount</Label>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                        <Input name="amt" onChange={handleChange} placeholder="Amount" min={0} max={10000} type="number" step="1" />
                        <InputGroupAddon addonType="append">.00</InputGroupAddon>
                    </InputGroup>
                </FormGroup>
                <br />

                <Link to="/thank-you">
                <Button>Make Investment</Button>
                </Link>
            </Form>
        </div >
    )
}