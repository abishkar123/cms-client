import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { updatepaymentMAction } from '../../pages/paymentmethods/paymentMAction'

export const EditPayForm = ({selectPaymentM}) => {
    const [formdt, setformdt]=useState({})
    const dispatch= useDispatch();

    useEffect(()=>{
        setformdt(selectPaymentM);
    }, [selectPaymentM]);

    const handleOnChange = e =>{
        const {name, value} = e.target;
        setformdt({
            ...formdt,
            [name]:value,
        })

    }
    const handleOnSubmit = e=>{
        e.preventDefault();

        const { _id, name, description, status} = formdt;
        dispatch(updatepaymentMAction({ _id, name, description, status}))

    }

  return (
    <div>
        <Form onSubmit={handleOnSubmit} className="text-center border p-4 rounded shadow-lg">
            <Row>
                <Col>
                <Form.Select name="Status" onChange={handleOnChange}
                required>
                    <option value="">--status --</option>
                    <option value="inactive" selected={formdt.status === "inactive"  }>inactive</option>
                    <option value="active" selected={formdt.status === "active"}>
                Active
              </option>
                </Form.Select>
                </Col>

                <Col>
                <Form.Control placeholder='Payment Method Name' 
                name="name" onChange={handleOnChange} required
                value={formdt.name}/>
                </Col>
                <Col>
                <Form.Control placeholder='Payment Method Descriation' 
                name="description" onChange={handleOnChange} required
                value={formdt.description}/>
                </Col>
                <Col>
                <Button type="submit" variant="warning">
              Update
            </Button>
                </Col>
            </Row> 

        </Form>


    </div>
  )
}
