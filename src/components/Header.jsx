import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle } from "@ionic/react";

export const Header = ({ title }) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle style={{ textAlign: "right" }}>
          {/* <img src="../assets/images/logo.png" width="50%" /> */}
          <img src="https://ciudadanoscomprometidos.com.mx/SRD/assets/img/logo.png" width="50%" />
        </IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};
