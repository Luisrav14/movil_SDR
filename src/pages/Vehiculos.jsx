import PageTemplate from "../components/PageTemplate";

export const Vehiculos = () => {
  return (
    <>
      <PageTemplate title="Mis Vehículos">
        <ion-card>
          <ion-card-header>
            <ion-card-title style={{ fontWeight: "bold", fontSize: "2em" }}>GAV-0356</ion-card-title>
            <ion-card-subtitle>Nissan Sentra 2022</ion-card-subtitle>
          </ion-card-header>
          <ion-card-content>
            <strong>Fecha de registro:</strong> <span>31 de Diciembre del 2023</span>
          </ion-card-content>

          <ion-button expand="block" color="success" style={{ margin: "1em" }}>
            Ver registros
          </ion-button>
        </ion-card>
      </PageTemplate>
    </>
  );
};
