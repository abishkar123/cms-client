import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { postNewCategory } from '../../pages/category/CategoryAction'


export default function AddNewCatFrm() {
    const [name, setName] = useState("")
    const dispatch = useDispatch();

 const handleOnSubmit = e =>{
    e.preventDefault();
    dispatch(postNewCategory({name}));
   
 }

  return (
    <div>
        <Form className='text-center border p-4 rounded shodow-lg'
        onSubmit={handleOnSubmit}>
            <Row>
                <Col>
                <Form.Control placeholder='Category name'
                name='name'
                onChange={(e)=> setName(e.target.value)
                }
                ></Form.Control>
                </Col>
                <Col>
                    <Button type='submit' variant='success'>Add New Category</Button>
               
                </Col>

                
            </Row>

        </Form>
   </div>
  )
}
