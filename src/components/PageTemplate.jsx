import { IonContent, IonPage } from "@ionic/react";
import { Header } from "../components/Header";

const PageTemplate = ({ title, children }) => {
  return (
    <>
      <IonPage style={{ paddingBottom: "2em" }}>
        <Header />
        <IonContent>
          <ion-item-divider>
            <h1 style={{ fontWeight: "bold", textAlign: "center" }}>{title}</h1>
          </ion-item-divider>
          {children}
        </IonContent>
      </IonPage>
    </>
  );
};

export default PageTemplate;
