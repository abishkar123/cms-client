import React from 'react'
import Form from 'react-bootstrap/Form';

export const CustomeInputField = ({Label, ...rest}) => {
  return (
    <div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>{Label}</Form.Label>
        <Form.Control {...rest} />

      </Form.Group>

    </div>
  )
}
