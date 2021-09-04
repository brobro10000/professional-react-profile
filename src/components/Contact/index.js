import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Form, Button } from 'react-bootstrap'

function ContactForm() {
    const [state, handleSubmit] = useForm("xyylldzy");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label htmlFor="email">
                    Email Address
                </Form.Label>
                <Form.Control
                    id="email"
                    type="email"
                    name="email"
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <Form.Control
                    id="message"
                    name="message"
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <Button type="submit" disabled={state.submitting}>
                    Submit
                </Button>
            </Form.Group>
        </Form>
    );
}
export default ContactForm