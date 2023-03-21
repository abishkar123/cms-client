import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { CustomeInputField } from '../../components/CustomeInputField/CustomeInputField';
import { AdminLoyout } from '../layout/AdminLoyout'
import { postProductAction } from './productAction';

export const NewProduct = () => {
    const [formdt, setFormdt]= useState({})
    const dispatch = useDispatch();
    const [newImages, setNewImages] = useState([]);

    const handleOnChanges = e =>{
        const {name, value}= e.target;

        setFormdt({
            ...formdt,
            [name]:value,
        })
    };

    const handleOnSubmit = e =>{
        e.preventDefault();
       const formData = new FormData();
      for (let key in formdt){
        formData.append(key, formdt[key]);
      }
      newImages.length && [...newImages].map((item)=> formData.append("images", item))
       dispatch(postProductAction(formData));
    }

    const handlOnImageUplodad = (e) => {
      const { files } = e.target;
  
      setNewImages(files);
    };

    const inputes = [{
        name: "name",
        Label: "Name",
        type: "text",
        placeholder: "Jordan 1 Low OG",
        required: true,
      },
      {
        name: "sku",
        Label: "Sku",
        type: "text",
        placeholder: "JOR-1-LOW",
        required: true,
      },
      {
        name: "qty",
        Label: "Qty",
        type: "number",
        placeholder: "Qlt No",
        required: true,
      },
      {
        name: "price",
        Label:"Price",
        type: "number",
        placeholder: "$100",
        required: true,
      },
      {
        name: "salesPrice",
        Label: "Sales Price",
        type: "number",
        placeholder: "$800",
      },
      {
        name: "salesStartDate",
        Label: "Sales Start Date",
        type: "date",
      },
      {
        name: "salesEndDate",
        Label: "Sales End Date",
        type: "date",
      },
      {
        name: "description",
        Label: "Description",
        as: "textarea",
        rows: 5,
        placeholder: "write detail information abou the product",
        required: true,
      },
      {
        name: "images",
        Label: "Images",
        type: "file",
        multiple: true,
        required: true,
        accept: "image/*",
      },
    ];

  return ( 
<AdminLoyout>
    <div className='py-3 fs-2'> New Products</div>
    <Link to="/products">{""}
      <Button variant='secondary'>&lt; Back</Button></Link>
    <hr/>
    <Form onSubmit={handleOnSubmit}>
        <Form.Group className='mb-3'>
            <Form.Check 
            name="status"
            type="switch"
            label="Status"
            value="inactive"
            >
            </Form.Check>

        </Form.Group>
        
        {inputes.map((item, i) => (
            <CustomeInputField
              key={i}
              {...item}
              onChange={
                item.name === "images" ? handlOnImageUplodad : handleOnChanges
              }
            />
          ))}
        <div className="d-grid">
            <Button type="submit" variant="danger">
              Add Product
            </Button>
          </div>


    </Form>
    
</AdminLoyout>

    
  )
}
