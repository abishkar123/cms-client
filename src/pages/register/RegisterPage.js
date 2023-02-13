import React, { useState } from "react";
import { Footer } from "../layout/Footer";
import { Header } from "../layout/Header";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import { toast } from "react-toastify";
import { CustomeInputField } from "../../components/CustomeInputField/CustomeInputField";
import { postNewAdmin } from "../../helps/axios";

const RegisterPage = () => {
  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { confirmPassword, ...rest } = form;
    if (confirmPassword !== rest.password) {
      toast.error("Password do not match!");
      return;
    }
    const { status, message } = await postNewAdmin(rest);

    toast[status](message);
  };
  const inputes = [
    {
      label: "First Name",
      type: "text",
      name: "fName",
      placeholder: "Sam",
      required: true,
    },
    {
      label: "Last Name",
      type: "text",
      name: "lName",
      placeholder: "Smith",
      required: true,
    },
    {
      label: "Phone",
      type: "text",
      name: "phone",
      placeholder: "02345",
    },
    {
      label: "Address",
      type: "text",
      name: "address",
      placeholder: "1 geroge st sydney",
    },
    {
      label: "Email",
      type: "email",
      name: "email",
      placeholder: "Smith@email.com",
      required: true,
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      placeholder: "********",
      required: true,
    },
    {
      label: "Confirm Password",
      type: "password",
      name: "confirmPassword",
      placeholder: "********",
      required: true,
    },
  ];

  return (
    <div>
      <Header />
      <div className="main register-page p-5">
        <Container className="m-3">
          <Form
            onSubmit={handleOnSubmit}
            className="border p-4 rounded shadow-lg"
          >
            <h3>Sign up new admin user </h3>
            <hr />

            {inputes.map((item, i) => (
              <CustomeInputField key={i} {...item} onChange={handleOnChange} />
            ))}

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default RegisterPage;