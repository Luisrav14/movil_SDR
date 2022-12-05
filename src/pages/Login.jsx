import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { IonLoading, IonToast } from "@ionic/react";
import { useState } from "react";
import { useHistory } from "react-router";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {"Derechos Reservados © "}
      SDR {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const history = useHistory();

  const [showToast, setShowToast] = useState(false);
  const [msg, setMsg] = useState("");
  const [showLoading, setShowLoading] = useState(false);

  const handleShowToast = (msj) => {
    setShowToast(true);
    setMsg(msj);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    if (data.get("email") === "") {
      handleShowToast("Ingresa un email válido");
      return;
    } else if (data.get("password") == "") {
      handleShowToast("Ingresa una contraseña");
      return;
    }

    const data4Send = {
      email: data.get("email"),
      password: data.get("password"),
    };

    setShowLoading(true);

    fetch(`https://backend.vecinoscomprometidos.com/api/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data4Send),
    }).then((res) => {
      setShowLoading(false);
      res.ok ? history.push("/home") : handleShowToast("Credenciales incorretas");
    });

    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <IonToast isOpen={showToast} color="danger" onDidDismiss={() => setShowToast(false)} message={msg} duration={1500} position="top" />
        <IonLoading cssClass="" isOpen={showLoading} onDidDismiss={() => setShowLoading(false)} message={"Cargando"} duration={5000} />
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ marginBottom: "3em", textAlign: "center" }}>
            <img src="https://ciudadanoscomprometidos.com.mx/SRD/assets/img/logo.png" width="50%" />
            <ion-divider></ion-divider>
          </div>
          <Typography component="h1" variant="h5">
            Iniciar Sesión
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField margin="normal" required fullWidth id="email" label="Correo electrónico" name="email" autoComplete="email" autoFocus />
            <TextField margin="normal" required fullWidth name="password" label="Contraseña" type="password" id="password" autoComplete="current-password" />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Iniciar Sesión
            </Button>
            <Grid container>
              <Grid item>
                <Link href="Register" variant="body2">
                  {"¿No tienes cuenta? Registrarse"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
