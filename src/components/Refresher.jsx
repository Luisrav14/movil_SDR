import React from "react";
import { IonContent, IonRefresher, IonRefresherContent } from "@ionic/react";
import { RefresherEventDetail } from "@ionic/core";
import { chevronDownCircleOutline } from "ionicons/icons";

function doRefresh(event) {
  setTimeout(() => {
    event.detail.complete();
  }, 2000);
}

export const Refresher = () => (
  <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
    <IonRefresherContent pullingIcon={chevronDownCircleOutline} refreshingSpinner="circles" refreshingText="Cargando..."></IonRefresherContent>
  </IonRefresher>
);
