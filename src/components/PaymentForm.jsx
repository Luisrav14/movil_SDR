import { useState } from "react";
import Cards from "react-credit-cards-2";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "react-credit-cards-2/es/styles-compiled.css";

const PaymentForm = () => {
  const [state, setState] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    focus: "",
  });
  const handleInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
      [e.target.number]: e.target.value,
      [e.target.expiry]: e.target.value,
      [e.target.cvc]: e.target.value,
    });
  };

  const handleFocusChange = (e) => {
    setState({
      ...state,
      focus: e.target.name,
    });
  };
  return (
    <div style={{ padding: "3em" }}>
      <Cards number={state.number} name={state.name} expiry={state.expiry} cvc={state.cvc} focused={state.focus} />
      <Box component="form" noValidate sx={{ mt: 3 }} style={{ margin: 20 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField type="number" placeholder="•••• •••• •••• ••••" name="number" id="number" onChange={handleInputChange} onFocus={handleFocusChange} maxLength="16" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField placeholder="Nombre" type="text" name="name" id="name" onChange={handleInputChange} onFocus={handleFocusChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField placeholder="Fecha de expiracion" type="number" name="expiry" id="expiry" onChange={handleInputChange} onFocus={handleFocusChange} maxLength="4" />
          </Grid>
          <Grid item xs={12}>
            <TextField type="text" placeholder="•••" name="cvc" id="cvc" onChange={handleInputChange} onFocus={handleFocusChange} maxLength="4" />
          </Grid>
        </Grid>
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onChange={handleInputChange} onFocus={handleFocusChange}>
          Aceptar
        </Button>
      </Box>
    </div>
  );
};

export default PaymentForm;
