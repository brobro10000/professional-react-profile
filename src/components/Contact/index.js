import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Form, Button, Container } from 'react-bootstrap'
import { validateEmail, capitalizeFirstLetter } from '../../utils/helpers';

function ContactForm() {
    const [state, handleSubmit] = useForm("xyylldzy");
    const [errorMessage, setErrorMessage] = useState('');

    if (state.succeeded) {
        return <p>We Received your Message!</p>;
    }
    function stage1Error(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Email is Invalid');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${capitalizeFirstLetter(e.target.name)} is required`);
            } else {
                setErrorMessage(null);
            }
        }

    }
    var displayEmailError = errorMessage.split(' ')[2] === 'Invalid' ? <Form.Label className='form-labels error'> {'* ' + errorMessage} </Form.Label> : ''
    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label className='form-labels' htmlFor="name">
                        Full Name
                    </Form.Label>
                    <Form.Control
                        placeholder={errorMessage.split(' ')[0] === 'Name' ? errorMessage : null}
                        id="name"
                        type="name"
                        name="name"
                        onBlur={stage1Error}
                    />
                    <ValidationError
                        prefix="name"
                        field="name"
                        errors={state.errors}
                    />
                    <Form.Label className='form-labels' htmlFor="email">
                        Email Address{displayEmailError}
                    </Form.Label>
                    <Form.Control
                        placeholder={errorMessage.split(' ')[0] === 'Email' ? errorMessage : null}
                        id="email"
                        type="email"
                        name="email"
                        onBlur={stage1Error}
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
                        as='textarea'
                        placeholder={errorMessage.split(' ')[0] === 'Message' ? errorMessage : null}
                        id="message"
                        name="message"
                        onBlur={stage1Error}
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