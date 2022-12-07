// import { DocumentViewer } from "@ionic-native/document-viewer";

import PageTemplate from "../components/PageTemplate";
import CheckMark from "../assets/images/correct.png";

const PaymentSuccess = () => {
  // const document = DocumentViewer();
  // const pdfView = () => document.viewDocument("../assets/SLA.pdf", "application/pdf", { title: "Comprobante" });

  return (
    <>
      <PageTemplate>
        <ion-item-group>
          <ion-card color="success" height="250">
            <ion-card-header>
              <ion-card-title style={{ fontWeight: "bold", fontSize: "2em", textAlign: "center" }}>PAGO REALIZADO</ion-card-title>
              <div style={{ textAlign: "center", marginTop: "1em", marginBottom: "2em" }}>
                <img src={CheckMark} width="30%" />
              </div>
              <ion-card-subtitle> </ion-card-subtitle>
            </ion-card-header>
            <ion-card-content style={{ fontWeight: "light" }}>
              <strong>Concepto de Pago: </strong> <br />
              Pago refrendo vehicular. Automóvil sedán particular. <br /> <br /> <strong>Modelo: </strong> Nissan Sentra 2022 <br />
              <strong>Fecha de pago:</strong> <span>01 de Enero del 2023</span>
              <ion-button expand="block" color="light" style={{ marginTop: "1.5em" }}>
                Descargar comproabnte
              </ion-button>
            </ion-card-content>
          </ion-card>
        </ion-item-group>
      </PageTemplate>
    </>
  );
};
export default PaymentSuccess;
