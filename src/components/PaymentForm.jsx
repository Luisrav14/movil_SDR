import { useState } from "react";
import Cards from "react-credit-cards-2";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "react-credit-cards-2/es/styles-compiled.css";
import { IonLoading, IonToast } from "@ionic/react";
import { useHistory } from "react-router";

const PaymentForm = () => {
  const [showToast, setShowToast] = useState(false);
  const [msg, setMsg] = useState("");
  const [showLoading, setShowLoading] = useState(false);

  const history = useHistory();

  const handleShowToast = (msj) => {
    setShowToast(true);
    setMsg(msj);
  };

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

  const handleSubmit = () => {
    if (state.name == "" || state.number == "" || state.expiry == "" || state.cvc == "") {
      handleShowToast("Completa todos los campos");
    } else {
      setShowLoading(true);
      setTimeout(() => {
        setShowLoading(false);
        history.push("/payment-success");
      }, 3000);
    }
  };

  const inputMaxLengh = (e, length) => {
    e.target.value = Math.max(0, e.target.value).toString().slice(0, length);
  };

  const handleFocusChange = (e) => {
    setState({
      ...state,
      focus: e.target.name,
    });
  };
  return (
    <div style={{ padding: "3em" }}>
      <IonToast isOpen={showToast} color="danger" onDidDismiss={() => setShowToast(false)} message={msg} duration={1500} position="bottom" />
      <IonLoading cssClass="" isOpen={showLoading} onDidDismiss={() => setShowLoading(false)} message={"Cargando"} duration={5000} />
      <Cards number={state.number} name={state.name} expiry={state.expiry} cvc={state.cvc} focused={state.focus} />
      <Box component="form" noValidate sx={{ mt: 3 }} style={{ margin: 20, textAlign: "center" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <TextField onInput={(e) => inputMaxLengh(e, 16)} type="number" placeholder="•••• •••• •••• ••••" name="number" id="number" onChange={handleInputChange} onFocus={handleFocusChange} />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField placeholder="Nombre" type="text" name="name" id="name" onChange={handleInputChange} onFocus={handleFocusChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField placeholder="Fecha de expiracion" type="number" name="expiry" id="expiry" onChange={handleInputChange} onFocus={handleFocusChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField type="text" placeholder="•••" name="cvc" id="cvc" onChange={handleInputChange} onFocus={handleFocusChange} />
          </Grid>
        </Grid>
        <Button type="button" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick={handleSubmit}>
          Aceptar
        </Button>
      </Box>
    </div>
  );
};

export default PaymentForm;
