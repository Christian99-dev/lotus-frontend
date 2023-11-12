import React from "react";
import Button from "./Button";
import Input from "./Input";
import * as yup from "yup";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import messageFormarter from "../../utils/messageFormater";

const Form = () => {
  const {
    strapiKontakt: {
      emailPlatzhalter,
      nachnamePlatzhalter,
      nachrichtPlatzhalter,
      nummerPlatzhalter,
      plzOrtPlatzhalter,
      strasseHausnummerPlatzhalter,
      vornamePlatzhalter,
      button,
    },
    strapiFormularPopups: {
      bitteWartenPopup,
      emailPopup,
      emailUngueltigPopup,
      fehlerPopup,
      nachnamePopup,
      nachrichtAbgeschicktPopup,
      nachrichtPopup,
      plzOrtPopup,
      strasseHausnummerPopup,
      telefonnummerPopup,
      vornamePopup,
    },
    strapiFormularAusgangsMail: { betreff, empfaenger, format },
  } = useStaticQuery(graphql`
    {
      strapiKontakt {
        button: Button
        emailPlatzhalter: EmailPlatzhalter
        googleMapsLink: GoogleMapsLink
        nachnamePlatzhalter: NachnamePlatzhalter
        nachrichtPlatzhalter: NachrichtPlatzhalter
        nummerPlatzhalter: NummerPlatzhalter
        plzOrtPlatzhalter: PlzOrtPlatzhalter
        strasseHausnummerPlatzhalter: StrasseHausnummerPlatzhalter
        subUeberschrift: SubUeberschrift
        ueberschrift: Ueberschrift
        vornamePlatzhalter: VornamePlatzhalter
        hintergrund: Hintergrund {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
        informationsZeilen: InformationsZeilen {
          Global {
            globalID
          }
          Icon {
            iconID
          }
        }
      }
      strapiFormularPopups {
        bitteWartenPopup: BitteWartenPopup
        emailPopup: EmailPopup
        emailUngueltigPopup: EmailUngueltigPopup
        fehlerPopup: FehlerPopup
        nachnamePopup: NachnamePopup
        nachrichtAbgeschicktPopup: NachrichtAbgeschicktPopup
        nachrichtPopup: NachrichtPopup
        plzOrtPopup: PlzOrtPopup
        strasseHausnummerPopup: StrasseHausnummerPopup
        telefonnummerPopup: TelefonnummerPopup
        vornamePopup: VornamePopup
      }

      strapiFormularAusgangsMail {
        betreff: Betreff
        empfaenger: Empfaenger
        format: NachrichtenFormat
      }
    }
  `);

  const onSubmit = (values, actions) => {
    actions.resetForm();
    send({
      name: values.name,
      lastname: values.lastname,
      message: values.message,
      email: values.email,
      number: values.number,
      street: values.street,
      location: values.location,
    });
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
      name: yup.string().required(vornamePopup),
      lastname: yup.string().required(nachnamePopup),
      message: yup.string().required(nachrichtPopup),
      email: yup.string().email(emailUngueltigPopup).required(emailPopup),
      number: yup.string().required(telefonnummerPopup),
      street: yup.string().required(strasseHausnummerPopup),
      location: yup.string().required(plzOrtPopup),
    }),
    onSubmit,
  });

  const checkErrors = () => {
    toast.dismiss();
    if (errors.name) toast.error(errors.name, { theme: "colored" });
    if (errors.lastname) toast.error(errors.lastname, { theme: "colored" });
    if (errors.message) toast.error(errors.message, { theme: "colored" });
    if (errors.email) toast.error(errors.email, { theme: "colored" });
    if (errors.number) toast.error(errors.number, { theme: "colored" });
    if (errors.street) toast.error(errors.street, { theme: "colored" });
    if (errors.location) toast.error(errors.location, { theme: "colored" });
  };

  const send = ({
    name,
    lastname,
    message,
    email,
    number,
    street,
    location,
  }) => {
    toast.info(bitteWartenPopup, {
      theme: "colored",
    });

    fetch(process.env.GATSBY_EMAIL_FORWARD_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subject: betreff,
        message: messageFormarter(
          name,
          lastname,
          message,
          email,
          number,
          street,
          location,
          format
        ),
        from: email,
        to: empfaenger,
        key: process.env.GATSBY_EMAIL_FORWARD_KEY,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error();
        }
      })
      .then((_) => {
        toast.dismiss();
        toast.success(nachrichtAbgeschicktPopup, {
          theme: "colored",
        });
      })
      .catch((_) => {
        toast.dismiss();
        toast.success(fehlerPopup, {
          theme: "colored",
          type: "error",
        });
      });
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
          text={vornamePlatzhalter}
          className="a"
        />
        <Input
          value={values.lastname}
          onChange={handleChange}
          type="text"
          name="lastname"
          text={nachnamePlatzhalter}
          className="b"
        />
        <Input
          value={values.message}
          onChange={handleChange}
          type="text"
          name="message"
          text={nachrichtPlatzhalter}
          className="c"
          textarea
        />
        <Input
          value={values.email}
          onChange={handleChange}
          type="text"
          name="email"
          text={emailPlatzhalter}
          className="d"
        />
        <Input
          value={values.number}
          onChange={handleChange}
          type="text"
          name="number"
          text={nummerPlatzhalter}
          className="e"
        />
        <Input
          value={values.street}
          onChange={handleChange}
          type="text"
          name="street"
          text={strasseHausnummerPlatzhalter}
          className="f"
        />
        <Input
          value={values.location}
          onChange={handleChange}
          type="text"
          name="location"
          text={plzOrtPlatzhalter}
          className="g"
        />
        <Button
          text={button}
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
