import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { CustomeSelect } from "../../components/custome-select/CustomeSelect";
import { CustomeInputField } from "../../components/CustomeInputField/CustomeInputField";
import { fetchCats } from "../category/CategoryAction";
import { AdminLoyout } from "../layout/AdminLoyout";
import { getSelectedProductAction, updateProductAction } from "./productAction";


export const EditProduct = () => {
  const dispatch = useDispatch();
  const [formDt, setFormDt] = useState({});
  const [newImages, setNewImages] = useState([]);
  const { _id } = useParams();

  const [imgToDelete, setImgToDelete] = useState([]);
  const { selectedProd } = useSelector((state) => state.product);

  const {cats}= useSelector((state)=>state.category)

  useEffect(() => {
    !cats.length && dispatch(fetchCats());
  }, [cats.length, dispatch]);

  useEffect(() => {
    !selectedProd._id && dispatch(getSelectedProductAction(_id));
    setFormDt(selectedProd);
  }, [dispatch, _id, selectedProd]);

  const handleOnChange = (e) => {
    let { checked, name, value } = e.target;

    console.log(checked, name, value);

    if (name === "mainImage" && imgToDelete.includes(value)) {
      return alert(
        "you can't delet the main image, change the main image first"
      );
    }

    if (name === "status") {
      value = checked ? "active" : "inactive";
    }

    setFormDt({
      ...formDt,
      [name]: value,
    });
  };

  const handleOnDelete = (e) => {
    const { checked, value } = e.target;

    if (formDt.mainImage === value) {
      return alert(
        "you can't delete the main image, change the main image first"
      );
    }

    if (checked) {
      setImgToDelete([...imgToDelete, value]);
    } else {
      setImgToDelete(imgToDelete.filter((item) => item !== value));
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { createdAt, updatedAt, __v, slug, ...rest } = formDt;
    const fromData = new FormData();

    for (let key in rest) {
      fromData.append(key, formDt[key]);
    }

    newImages.length &&
      [...newImages].map((item) => fromData.append("newImages", item));
    if (imgToDelete.length) {
      fromData.append("imgToDelete", imgToDelete);
    }
    dispatch(updateProductAction(fromData));
  };

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
    value: formDt.name
  },
  {
  name:"slug",
      Label: "Slug",
      type: "text",
      disabled: true,
      required: true,
      value: formDt.slug,
    },
  {
    name: "sku",
    Label: "Sku",
    type: "text",
    placeholder: "JOR-1-LOW",
    required: true,
    value: formDt.sku,
  },
  
  {
    name: "qty",
    Label: "Qty",
    type: "number",
    placeholder: "Qlt No",
    required: true,
    value: formDt.qty,
  },
  {
    name: "price",
    Label:"Price",
    type: "number",
    placeholder: "$100",
    required: true,
    value: formDt.price,
  },
  {
    name: "salesPrice",
    Label: "Sales Price",
    type: "number",
    placeholder: "$800",
    value: formDt.salesPrice,
  },
  {
    name: "salesStartDate",
    Label: "Sales Start Date",
    type: "date",
    value: formDt.salesStartDate ? formDt.salesStartDate.substr(0, 10) : null,
  },
  {
    name: "salesEndDate",
    Label: "Sales End Date",
    type: "date",
    value: formDt.salesEndDate ? formDt.salesEndDate.substr(0, 10) : null,
  },
  {
    name: "description",
    Label: "Description",
    as: "textarea",
    rows: 5,
    placeholder: "write detail information abou the product",
    required: true,
    value: formDt.description,
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
      <div className="mb-3">
        <div className="py-3 fs-2">Edit Product</div>

        <Link to="/products">
          {" "}
          <Button variant="secondary"> &lt; Back</Button>
        </Link>
        <hr />

        <Form onSubmit={handleOnSubmit}>
          <Form.Group className="mb-3">
            <Form.Check
              name="status"
              type="switch"
              label="Status"
              checked={formDt.status === "active"}
              onChange={handleOnChange}
            />
          </Form.Group>

          <CustomeSelect
            label="Category"
            args={cats}
            func={handleOnChange}
            name="parentCat"
            selectedCat={selectedProd.parentCat}
          />

          {inputes.map((item, i) => (
            <CustomeInputField
              key={i}
              {...item}
              onChange={
                item.name === "images" ? handlOnImageUplodad : handleOnChange
              }
            />
          ))}

          <div className="py-4 d-flex justify-content-between flex-wrap">
            {formDt?.images?.map((item, i) => (
              <div className="d-flex flex-column">
                <div>
                  <input
                    type="radio"
                    name="mainImage"
                    value={item}
                    onChange={handleOnChange}
                    checked={item === formDt.mainImage}
                  />{" "}
                  <label htmlFor="">Main Image</label>
                </div>

                <img
                  key={i}
                  className="border p-2"
                  src={process.env.REACT_APP_DOMAIN + item.substr(6)}
                  width="120px"
                  alt="product"
                />
                <Form.Check
                  label="Delete"
                  onChange={handleOnDelete}
                  value={item}
                  checked={imgToDelete.includes(item)}
                />
              </div>
            ))}
          </div>

          <div className="d-grid">
            <Button type="submit" variant="success">
              Update Product
            </Button>
          </div>
        </Form>
      </div>
    
    </AdminLoyout>
      
  );
};