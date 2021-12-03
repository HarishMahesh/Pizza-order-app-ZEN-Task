import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import "./FormInput.css";

const FormSubmitSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "*Too Short!")
    .max(50, "*Too Long!")
    .required("*Required"),
  address: Yup.string()
    .min(10, "*Too Short!")
    .max(150, "*Too Long!")
    .required("*Required"),
  email: Yup.string().email("*Invalid email").required("*Required"),
  mobileNo: Yup.number("*Invalid number")
    .positive("*Invalid number")
    .required("*Required"),
});

const FormInput = (props) => (
  <div>
    <Formik
      initialValues={{ name: "", email: "", mobileNo: "", address: "" }}
      validationSchema={FormSubmitSchema}
      onSubmit={(values) => {
        console.log(values);
        props.setOrderPlaced(true);
        props.resetCart();
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="form-inp-container">
            <input
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Customer Name"
              value={values.name}
            />
            {touched.name && <span> {errors.name} </span>}
          </div>
          <div className="form-inp-container">
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Email"
              value={values.email}
            />
            {touched.email && <span> {errors.email} </span>}
          </div>
          <div className="form-inp-container">
            <input
              type="text"
              name="mobileNo"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Mobile Number"
              value={values.mobileNo}
            />
            {touched.mobileNo && <span> {errors.mobileNo} </span>}
          </div>
          <div className="form-inp-container">
            <textarea
              rows="5"
              name="address"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Address"
              value={values.address}
            />
            {touched.address && <span> {errors.address} </span>}
          </div>
          <div className="cart-button">
            <b>{`Total Items : ${props.quant}`}</b>
            <b>{`Total Amount : ${props.totalAmount}`}</b>
            <button type="submit" class="btn btn-secondary">
              Place Order
            </button>
          </div>
        </form>
      )}
    </Formik>
  </div>
);

export default FormInput;
