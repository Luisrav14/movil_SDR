import { useEffect, useState } from "react";
import { camera } from "ionicons/icons";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import PageTemplate from "../components/PageTemplate";
import { usePhotoGallery } from "../hooks/usePhotoGallery";
import { IonFab, IonFabButton, IonIcon } from "@ionic/react";

export const VehiculosAgregar = () => {
  const { photos, takePhoto } = usePhotoGallery();

  useEffect(() => {
    !!photos[0] && console.log(photos[0].webPath);
  }, [photos]);

  return (
    <>
      <PageTemplate title="Agregar Vehículo">
        <Box component="form" noValidate sx={{ mt: 3 }} style={{ margin: 20 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField name="marca" fullWidth id="marca" label="Marca" autoFocus />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth id="modelo" label="Modelo" name="modelo" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth id="color" name="color" label="Color" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Placas" name="placas" type="text" id="placas" />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Guardar
          </Button>
        </Box>
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={() => takePhoto()}>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>
      </PageTemplate>
    </>
  );
};
