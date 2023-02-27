import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateCat } from "../../pages/category/CategoryAction";

export const EditCatFrm = ({ selecteCat }) => {
  const dispatch = useDispatch();

  const [formDt, setFormDt] = useState({});

  useEffect(() => {
    setFormDt(selecteCat);
  }, [selecteCat]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormDt({
      ...formDt,

      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const { _id, name, status } = formDt;

    dispatch(updateCat({ _id, name, status }));
  };

  return (
    <div>
      <Form
        onSubmit={handleOnSubmit}
        className="text-center border p-4 rounded shadow-lg"
      >
        <Row>
          <Col>
            <Form.Select name="status" onChange={handleOnChange} required>
              <option value="">-- status --</option>
              <option value="inactive" selected={formDt.status === "inactive"}>
                Inactive
              </option>
              <option value="active" selected={formDt.status === "active"}>
                Active
              </option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Control
              placeholder="Category name"
              name="name"
              onChange={handleOnChange}
              required
              value={formDt.name}
            />
          </Col>
          <Col>
            <Button type="submit" variant="warning">
              Update
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};