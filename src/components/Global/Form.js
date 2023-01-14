import React from "react";
import Button from "./Button";
import Input from "./Input";
import * as yup from "yup";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import styled from "styled-components";
import emailjs from "emailjs-com";
import { emailJSSettings } from "../../admin";

const Form = ({ data }) => {
  const onSubmit = (values, actions) => {
    toast.success("Deine Nachricht wurde abgeschickt!", { theme: "colored" });
    actions.resetForm();
    emailjs.send(
      emailJSSettings().serviceID,
      emailJSSettings().templateID,
      {
        name: values.name,
        lastname: values.lastname,
        message: values.message,
        email: values.email,
        number: values.number,
        street: values.street,
        location: values.location,
      },
      emailJSSettings().publicKey
    ).then(result => {
      // console.log(result.text);
    }, (error) => {
      // console.log(error.text);
    })
  };

  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      message: "",
      email: "",
      number: "",
      street: "",
      location: "",
    },
    validationSchema: yup.object().shape({
      name: yup.string().required("Name darf nicht leer sein."),
      lastname: yup.string().required("Nachname darf nicht leer sein."),
      message: yup.string().required("Nachricht darf nicht leer sein."),
      email: yup
        .string()
        .email("Bitte gültige Email eingeben.")
        .required("Email darf nicht leer sein."),
      number: yup.string().required("Nummer darf nicht leer sein."),
      street: yup.string().required("Straße + Hausnummer darf nicht leer sein"),
      location: yup.string().required("Plz + Ort darf nicht leer sein."),
    }),
    onSubmit,
  });

  const checkErrors = () => {
    if (errors.name) toast.error(errors.name, { theme: "colored" });
    if (errors.lastname) toast.error(errors.lastname, { theme: "colored" });
    if (errors.message) toast.error(errors.message, { theme: "colored" });
    if (errors.email) toast.error(errors.email, { theme: "colored" });
    if (errors.number) toast.error(errors.number, { theme: "colored" });
    if (errors.street) toast.error(errors.street, { theme: "colored" });
    if (errors.location) toast.error(errors.location, { theme: "colored" });
  };
  
  return (
    <>
      <StyledToastContainer />
      <form className="form" onSubmit={handleSubmit}>
        <Input
          value={values.name}
          onChange={handleChange}
          type="text"
          name="name"
          text={data.vornamePlatzhalter}
          className="a"
        />
        <Input
          value={values.lastname}
          onChange={handleChange}
          type="text"
          name="lastname"
          text={data.nachnamePlatzhalter}
          className="b"
        />
        <Input
          value={values.message}
          onChange={handleChange}
          type="text"
          name="message"
          text={data.nachrichtPlatzhalter}
          className="c"
          textarea
        />
        <Input
          value={values.email}
          onChange={handleChange}
          type="text"
          name="email"
          text={data.emailPlatzhalter}
          className="d"
        />
        <Input
          value={values.number}
          onChange={handleChange}
          type="text"
          name="number"
          text={data.nummerPlatzhalter}
          className="e"
        />
        <Input
          value={values.street}
          onChange={handleChange}
          type="text"
          name="street"
          text={data.strasseHausnummerPlatzhalter}
          className="f"
        />
        <Input
          value={values.location}
          onChange={handleChange}
          type="text"
          name="location"
          text={data.plzOrtPlatzhalter}
          className="g"
        />
        <Button
          text={data.buttonPlatzhalter}
          color="transparent"
          className="button"
          type="submit"
          onClick={checkErrors}
        />
      </form>
    </>
  );
};

export default Form;

const StyledToastContainer = styled(ToastContainer).attrs({
  className: "toast-container",
  toastClassName: "toast",
  bodyClassName: "body",
  progressClassName: "progress",
})`
  /* .toast is passed to toastClassName */
  .toast {
    font-size: var(--fs-3);
  }

  /* .body is passed to bodyClassName */
  .body {
  }

  /* .progress is passed to progressClassName */
  .progress {
  }
`;
