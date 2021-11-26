import React from 'react';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';


const Contact = () => {
    const [submit, setSubmit] = useState({
        fullname: "",
        phone: "",
        email: "",
        msg: "",
    });

    const InputEvent = (event) => {
        const { name, value } = event.target;
        
        setSubmit((preVal) => {
            return {
                ...preVal,
                [name]: value,
            };
        });
        // console.log([name])
    };
    const handleOnSubmit = (e) => {
        e.preventDefault();
        alert(`my name is${submit.fullname} my email is ${submit.email} my mobile ${submit.phone} ${submit.msg}`)
    };
    return (
        <>
            <div className="my-5">
                <h4 className="text-center">Contact Us</h4>
            </div>
            <div className="container ">
                <Form style={{textAlign:'left'}} onSubmit={handleOnSubmit}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Name" name="fullname"
                            value={submit.fullname} onChange={InputEvent} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="number" placeholder="enter your mobile number" name="phone"
                            value={submit.phone} onChange={InputEvent} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" name="email"
                            value={submit.email} onChange={InputEvent}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" name="msg" value={submit.msg}
                            onChange={InputEvent} rows={3} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    );
};

export default Contact;