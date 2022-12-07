import PageTemplate from "../components/PageTemplate";

export const Propiedades = () => {
  return (
    <>
      <PageTemplate title="Mis Propiedades">
        <ion-card>
          <ion-card-header>
            <ion-card-title style={{ fontWeight: "bold", fontSize: "2em" }}>SDFS78FD7</ion-card-title>
            <ion-card-subtitle>
              5 de febrero #300. <br /> Casa 120m‎², doble planta, cochera, patio.
            </ion-card-subtitle>
          </ion-card-header>
          <ion-card-content>
            <strong>Fecha de registro:</strong> <span>31 de Diciembre del 2023</span>
          </ion-card-content>

          <ion-button expand="block" color="success" style={{ margin: "1em" }} href="/pagos">
            Ver registros
          </ion-button>
        </ion-card>
      </PageTemplate>
    </>
  );
};
