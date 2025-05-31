import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Box,
  OutlinedInput,
} from "@mui/material";
import React from "react";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "../Formulario/Formulario.css";
import red from "@mui/material/colors/red";
import { alpha, styled } from "@mui/material/styles";
import emailjs from "@emailjs/browser";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "grey",
  },
  "& .MuiInput-underline:after": {
    color: "red",
    borderRadius: "0px",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "grey",
      borderRadius: "0px",
      border: "3px solid #4D4D4D;",
    },
    "&:hover fieldset": {
      borderColor: "#2b3380;",
    },
    "&.Mui-focused fieldset": {
      borderColor: "grey",
      border: "3px solid #4D4D4D;",
    },
  },
});

export default function Formulario() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const form = useRef();

  const handleChangeName = (event) => setName(event.target.value);
  const handleChangeEmail = (event) => setEmail(event.target.value);
  const handleChangeMessage = (event) => setMessage(event.target.value);

  const validarEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validarNombre = (nombre) => {
    const re = /^[a-zA-Z\s]+$/;
    return nombre.length >= 2 && nombre.length <= 50 && re.test(nombre);
  };

  const validarMensaje = (mensaje) => {
    return mensaje.length >= 10 && mensaje.length <= 500;
  };

  const sendEmail = (e) => {
    e.preventDefault();


    setError("");

    // Validations
    if (!name || !email || !message) {
      setError("All fields are required.");
      return;
    }

    if (!validarNombre(name)) {
      setError(
        "Name must be between 2 and 50 characters and contain only letters."
      );
      return;
    }

    if (!validarEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!validarMensaje(message)) {
      setError("Message must be between 10 and 500 characters.");
      return;
    }


    emailjs
      .sendForm("service_ok5uzqh", "template_61g74zz", form.current, {
        publicKey: "mkus3JnSJd-g_U_Bl",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <Box
      style={{
        marginTop: 10,
        minWidth: "80%",
        maxWidth: "100%",
        margin: "0px",
      }}
      className="contact-box"
    >
      <CardContent>
        <form ref={form} onSubmit={sendEmail} noValidate>
          <div className="contactForm-item1">
            <CssTextField
              placeholder={"Unfilled field"}
              label={"Name"}
              variant="outlined"
              fullWidth
              value={name}
              name="name"
              onChange={handleChangeName}
              required
            />
          </div>
          <div className="contactForm-item">
            <CssTextField
              type="email"
              placeholder={"Unfilled field"}
              label={"Email"}
              variant="outlined"
              fullWidth
              value={email}
              name="correo"
              onChange={handleChangeEmail}
              required
            />
          </div>
          <div className="contactForm-item">
            <CssTextField
              label={"Message"}
              multiline
              rows={6}
              placeholder={"Unfilled field"}
              variant="outlined"
              fullWidth
              value={message}
              name="message"
              onChange={handleChangeMessage}
              required
            />
          </div>
          {error && <div style={{ color: "red" }}>{error}</div>}
          <div className="contactForm-boton">
            <Button
              variant="contained"
              color="primary"
              sx={{ mr: 2 }}
              type="submit"
            >
              Send
            </Button>
          </div>
        </form>
      </CardContent>
    </Box>
  );
}
