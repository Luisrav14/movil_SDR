import { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import PageTemplate from "../components/PageTemplate";

const Perfil = () => {
  const [btnDisabled, setBtnDisabled] = useState(true);

  const disableBtn = () => {
    btnDisabled === true && setBtnDisabled(false);
  };

  return (
    <>
      <PageTemplate title="Mi Perfil">
        <Box component="form" noValidate sx={{ mt: 3 }} style={{ margin: 20 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField autoComplete="given-name" name="firstName" fullWidth id="firstName" label="Nombre" value="Nombre Prueba" autoFocus onChange={disableBtn} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth id="lastName" label="Apellidos" value="Apellidos Prueba" name="apellidos" autoComplete="family-name" onChange={disableBtn} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth id="email" name="email" label="Correo electrónico" value="mail@mail.com" autoComplete="email" onChange={disableBtn} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Contraseña" name="password" type="password" id="password" autoComplete="new-password" value="12345678" onChange={disableBtn} />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} disabled={btnDisabled}>
            Guardar Cambios
          </Button>
        </Box>
      </PageTemplate>
    </>
  );
};

export default Perfil;
