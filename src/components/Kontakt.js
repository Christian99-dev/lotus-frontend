import React from "react";
import styled from "styled-components";
import SpaceWrapper from "../utils/SpaceWrapper";
import Icon from "./Global/Icon";
import Title from "./Global/Titel";
import Input from "./../components/Global/Input";
import Button from "./Global/Button";
import bgimg from "../media/images/img3.png";
import { Parallax } from "react-parallax";
import MapsWrapper from "../components/Global/MapsWrapper";
import { device } from "../theme/breakpoints";
import * as yup from "yup";
import { useFormik } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Kontakt({ ...props }) {

  const onSubmit = (values, actions) => {
    toast.success("Deine Nachricht wurde abgeschickt!", { theme: "colored" });
    actions.resetForm();
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
    onSubmit
  });

  const checkErrors = () => {
    if(errors.name) toast.error(errors.name, { theme: "colored" });
    if(errors.lastname) toast.error(errors.lastname, { theme: "colored" });
    if(errors.message) toast.error(errors.message, { theme: "colored" });
    if(errors.email) toast.error(errors.email, { theme: "colored" });
    if(errors.number) toast.error(errors.number, { theme: "colored" });
    if(errors.street) toast.error(errors.street, { theme: "colored" });
    if(errors.location) toast.error(errors.location, { theme: "colored" });
  }
  
  return (
    <div id="contact">
      <StyledToastContainer />
      <KontaktWrapper bgImage={bgimg} strength={500} {...props}>
        {/* id anchor */}
        <div id="contact" />
        <div className="filter">
          <SpaceWrapper
            spacing={{
              left: "border",
              right: "border",
              top: "contact-inner",
              bottom: "contact-inner",
            }}
            className="wrapper"
          >
            <div className="left">
              <Title
                text="Kontaktieren sie uns"
                spacing={{ bottom: "team-m-space" }}
              />
              <Info
                icon="phone"
                text="01567 / 482375"
                spacing={{ bottom: "team-s-space" }}
              />
              <Info
                icon="location"
                text="Neue Roßstr. 15, 66128 Saarbrücken"
                spacing={{ bottom: "team-m-space" }}
              />

              {/** FORM */}
              <form className="form" onSubmit={handleSubmit}>
                <Input
                  value={values.name}
                  onChange={handleChange}
                  type="text"
                  name="name"
                  text="Vorname"
                  className="a"
                />
                <Input
                  value={values.lastname}
                  onChange={handleChange}
                  type="text"
                  name="lastname"
                  text="Nachname"
                  className="b"
                />
                <Input
                  value={values.message}
                  onChange={handleChange}
                  type="text"
                  name="message"
                  text="Nachricht"
                  className="c"
                  textarea
                />
                <Input
                  value={values.email}
                  onChange={handleChange}
                  type="text"
                  name="email"
                  text="Email"
                  className="d"
                />
                <Input
                  value={values.number}
                  onChange={handleChange}
                  type="text"
                  name="number"
                  text="Telefonnummer"
                  className="e"
                />
                <Input
                  value={values.street}
                  onChange={handleChange}
                  type="text"
                  name="street"
                  text="Straße + Hausnummer"
                  className="f"
                />
                <Input
                  value={values.location}
                  onChange={handleChange}
                  type="text"
                  name="location"
                  text="Plz + Ort"
                  className="g"
                />
                <Button
                  text="Absenden"
                  color="transparent"
                  className="button"
                  type="submit"
                  onClick={checkErrors}
                />
              </form>
            </div>
            <div className="right">{/* <MapsWrapper /> */}</div>
          </SpaceWrapper>
        </div>
      </KontaktWrapper>
    </div>
  );
}

const KontaktWrapper = styled(Parallax)`

  .filter {
    background: var(--background-filter-primary);
  }

  .wrapper {
    gap: var(--team-m-space);
    display: grid;
    grid-template-columns: 1fr 1fr;

    .left {
      flex: 1 1 0;
      .form {
        display: grid;
        gap: var(--team-xs-space);
        grid-template-columns: 1fr 1fr;
        .c,
        .d,
        .e {
          grid-column: 1 / span 2;
        }

        .c {
          grid-row: 2 / span 6;
        }

        .button {
          grid-column: 1 / span 2;
        }
      }
    }

    .right {
      flex: 1 1 0;
      border-radius: 10px;
    }

    @media ${device.laptop} {
      grid-template-columns: 60% 40%;
    }

    @media ${device.tablet} {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr var(--contact-maps-height-tablet);

      .left {
        .form {
          grid-template-columns: 1fr;
          .a,
          .b,
          .c,
          .d,
          .e,
          .f,
          .g,
          .button {
            grid-column: unset;
          }
        }
      }
    }
  }
`;

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

function Info({ spacing, icon, text }) {
  return (
    <InfoWrapper spacing={spacing}>
      <Icon name={icon} height="icon-m" />
      <div className="text">{text}</div>
    </InfoWrapper>
  );
}

const InfoWrapper = styled(SpaceWrapper)`
  display: flex;
  gap: var(--team-xs-space);
  .text {
    font-size: var(--fs-2);
    font-weight: var(--semibold);
    color: var(--secondary);
  }

  @media ${device.tablet} {
    flex-direction: column;
    .text {
      text-align: center;
    }
  }
`;
