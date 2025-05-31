import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import Modal from "@mui/material/Modal";
import "../ModalPostular/ModalPostular.css";
import axios from "axios";

import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ModalPostular = ({
  handleOpenedpost,
  handleCloseedppost,
  openedpost,
  vacante,
}) => {
  const form = useRef();
  const [error, setError] = useState("");
  const [countries, setCountries] = useState([]);
  const [name, setUserName] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [direccion, setDireccion] = useState("");
  const [paisSegundoPasaporte, setPaisSegundoPasaporte] = useState("");
  const [nacionalidad, setNacionalidad] = useState("");

  const [successMessage, setSuccessMessage] = useState("");

  const handleChangeName = (event) => setUserName(event.target.value);
  const handleChangeEmail = (event) => setCorreo(event.target.value);
  const handleChangeTelefono = (event) => setTelefono(event.target.value);
  const handleChangeDireccion = (event) => setDireccion(event.target.value);
  const handleChangeNacionalidad = (event) =>
    setNacionalidad(event.target.value);
  const handleChangePaisSegundoPasaporte = (event) =>
    setPaisSegundoPasaporte(event.target.value);

  const validarEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const countryList = response.data.map((country) => ({
          name: country.name.common,
          code: country.cca3,
        }));
        setCountries(countryList);
      } catch (error) {
        console.error("Error fetching countries: ", error);
      }
    };

    fetchCountries();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setError("");

    // Validaciones
    if (!name || !correo || !telefono || !direccion || !nacionalidad) {
      setError("All fields are required.");
      return;
    }

    if (nacionalidad === "United States" && !paisSegundoPasaporte) {
      setError(
        "Please specify the country of the second passport if you are from the United States."
      );
      return;
    }

    if (!validarEmail(correo)) {
      setError("Please enter a valid email address.");
      return;
    }

    emailjs
      .sendForm("service_ok5uzqh", "template_p171htx", form.current, {
        publicKey: "mkus3JnSJd-g_U_Bl",
      })
      .then(
        () => {
          setSuccessMessage("Your application has been submitted successfully!"); // Mostrar mensaje de éxito
          e.target.reset(); // Limpiar el formulario
          handleCloseedppost(); // Cerrar el modal
        },
        (error) => {
          setError("Failed to send the application. Please try again later."); // Manejo de errores
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <Modal
      keepMounted
      open={openedpost}
      onClose={handleCloseedppost}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: { xs: "90%", sm: "60%", md: "50%" },
          maxHeight: "80vh",
          overflowY: "auto",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          mt: 2,
          position: "relative",
        }}
      >
        <IconButton
          onClick={handleCloseedppost}
          sx={{
            position: "absolute",
            right: 16,
            top: 16,
            color: "text.secondary",
          }}
        >
          <CloseIcon />
        </IconButton>

        <h2>Application Form for Teachers</h2>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="--form-control--card"
            noValidate
          >
            <input type="hidden" name="vacante" value={vacante} />

            <FormControl fullWidth sx={{ mb: 2 }}>
              <TextField
                variant="outlined"
                placeholder="Full Name"
                required
                InputProps={{ style: { height: 40 } }}
                name="user_name"
                value={name}
                onChange={handleChangeName}
              />
            </FormControl>

            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Nationality</InputLabel>
              <Select
                name="nacionalidad"
                value={nacionalidad}
                onChange={handleChangeNacionalidad}
                required
              >
                {countries.map((country) => (
                  <MenuItem key={country.code} value={country.name}>
                    {country.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Do you have dual nationality?</InputLabel>
              <Select name="doble_nacionalidad" required>
                <MenuItem value="Sí">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
              </Select>
              <FormHelperText>
                If you selected "Yes", please indicate the country of the second
                passport.
              </FormHelperText>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Country of second passport</InputLabel>
                <Select
                  name="pais_segundo_pasaporte"
                  value={paisSegundoPasaporte}
                  onChange={handleChangePaisSegundoPasaporte}
                  required
                >
                  {countries
                    .filter((country) => country.name !== "United States")
                    .map((country) => (
                      <MenuItem key={country.code} value={country.name}>
                        {country.name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </FormControl>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <TextField
                variant="outlined"
                type="text"
                placeholder="Residential Address"
                name="direccion"
                value={direccion}
                onChange={handleChangeDireccion}
                InputProps={{ style: { height: 40 } }}
              />
            </FormControl>

            <FormControl fullWidth sx={{ mb: 2 }}>
              <TextField
                variant="outlined"
                type="tel"
                placeholder="Contact Phone"
                name="telefono"
                value={telefono}
                onChange={handleChangeTelefono}
                required
                InputProps={{ style: { height: 40 } }}
              />
            </FormControl>

            <FormControl fullWidth sx={{ mb: 2 }}>
              <TextField
                variant="outlined"
                type="email"
                placeholder="Email Address"
                required
                value={correo}
                name="correo"
                onChange={handleChangeEmail}
                InputProps={{ style: { height: 40 } }}
              />
            </FormControl>

            {/* Required Qualifications Header */}
            <h3 style={{ color: "rgb(34, 40, 155)" }}>
              Required Qualifications
            </h3>

            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>
                Do you have the status of a fully qualified teacher?
              </InputLabel>
              <Select name="estado_docente" required>
                <MenuItem value="Sí">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 2 }}>
              <TextField
                variant="outlined"
                placeholder="Indicate the certification you possess"
                name="certificacion"
                required
                InputProps={{ style: { height: 40 } }}
              />
            </FormControl>

            <FormControl fullWidth sx={{ mb: 2 }}>
              <TextField
                variant="outlined"
                placeholder="Year you obtained the certification"
                name="anio_certificacion"
                required
                InputProps={{ style: { height: 40 } }}
              />
            </FormControl>

            {/* Work Experience Header */}
            <h3 style={{ color: "#d7ae64" }}>Work Experience</h3>

            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Total Teaching Experience</InputLabel>
              <Select name="experiencia_docente" required>
                <MenuItem value="Menos de 2 años">Less than 2 years</MenuItem>
                <MenuItem value="2-5 años">2-5 years</MenuItem>
                <MenuItem value="Más de 5 años">More than 5 years</MenuItem>
              </Select>
            </FormControl>

            <h4>
              Do you have experience with the following curricular programs?
              (check all that apply):
            </h4>

            <FormControl fullWidth sx={{ mb: 2 }}>
              <FormHelperText>Select all that apply:</FormHelperText>
              {["IPC", "Cambridge", "IGCSE", "IB DP", "None"].map(
                (programa) => (
                  <FormControlLabel
                    control={<Checkbox name={programa} />}
                    label={programa}
                    key={programa}
                  />
                )
              )}
            </FormControl>
            {successMessage && (
              <div style={{ color: "green" }}>{successMessage}</div>
            )}
            {error && <div style={{ color: "red" }}>{error}</div>}

            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
            >
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalPostular;
