import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Form, Button, Container } from 'react-bootstrap'

function ContactForm() {
    const [state, handleSubmit] = useForm("xyylldzy");
    if (state.succeeded) {
        return <p>We Received your Message!</p>;
    }
    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label className='form-labels' htmlFor="email">
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
                    <Form.Label htmlFor="message">
                        Message
                    </Form.Label>
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
        </Container>
    );
}
export default ContactForm