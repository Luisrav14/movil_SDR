import { IonIcon } from "@ionic/react";
import { downloadOutline } from "ionicons/icons";
import PageTemplate from "../components/PageTemplate";

const Pagos = () => {
  return (
    <>
      <PageTemplate title="Mis Pagos">
        {/* Pagos Pendientes */}
        <ion-item-group>
          <ion-item-divider>
            <ion-label>Pendientes</ion-label>
          </ion-item-divider>

          <ion-card color="danger">
            <ion-card-header>
              <ion-card-title style={{ fontWeight: "bold", fontSize: "2em", marginBottom: "1em" }}>
                $4850.00 MXN
                <ion-chip color="" style={{ marginLeft: "1em" }}>
                  Refrendo
                </ion-chip>
              </ion-card-title>
              <ion-card-subtitle>
                Automóvil sedán particular <br /> Nissan Sentra 2022
              </ion-card-subtitle>
            </ion-card-header>
            <ion-card-content>
              <strong>Placas :</strong> <span>GAV-0356</span>
              <br />
              <strong>Fecha de vencimiento:</strong> <span>31 de Diciembre del 2023</span>
            </ion-card-content>

            <ion-button expand="block" color="success" style={{ margin: "1em" }} href="/metodos">
              Pagar
            </ion-button>
          </ion-card>
        </ion-item-group>

        {/* Pagos Realizados */}

        <ion-item-group>
          <ion-item-divider>
            <ion-label>Pagados</ion-label>
          </ion-item-divider>

          <ion-card color="success">
            <ion-card-header>
              {/*  <div style={{ marginRight: "4em", textAlign: "right" }}>
                <ion-fab>
                  <ion-fab-button color="tertiary">
                    <IonIcon md={downloadOutline} />
                  </ion-fab-button>
                </ion-fab>
              </div> */}
              <ion-card-title style={{ fontWeight: "bold", fontSize: "2em", marginBottom: "1em" }}>
                $4850.00 MXN
                <ion-chip color="" style={{ marginLeft: "1em" }}>
                  Predial
                </ion-chip>
              </ion-card-title>
              <ion-card-subtitle>
                5 de febrero #300. <br /> Casa 120m‎², doble planta, cochera, patio.
              </ion-card-subtitle>
            </ion-card-header>
            <ion-card-content style={{ fontWeight: "light" }}>
              <strong>Clave Catastral: </strong> <span>0TR4-68D5</span>
              <br />
              <strong>Fecha de pago:</strong> <span>01 de Enero del 2023</span>
              <ion-button expand="block" color="light" style={{ marginTop: "1.5em" }} href="/payment-success">
                Ver más
              </ion-button>
            </ion-card-content>
          </ion-card>
        </ion-item-group>
      </PageTemplate>
    </>
  );
};
export default Pagos;
