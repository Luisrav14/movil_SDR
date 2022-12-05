import { useLocation } from "react-router-dom";

import { IonContent, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, IonNote } from "@ionic/react";
import { fileTrayFullSharp, homeSharp, businessSharp, cardSharp, personSharp, fileTraySharp, returnDownForwardSharp, logOutOutline, hourglassOutline, carSport, businessOutline, logOutSharp } from "ionicons/icons";

import "../assets/css/Menu.css";

const appPages = [
  {
    title: "Inicio",
    url: "/home",
    iosIcon: homeSharp,
    mdIcon: homeSharp,
  },
  {
    title: "Mis Pagos",
    url: "/pagos",
    iosIcon: fileTrayFullSharp,
    mdIcon: fileTrayFullSharp,
  },
  {
    title: "Mis Propiedades",
    url: "/propiedades",
    iosIcon: businessSharp,
    mdIcon: businessSharp,
  },
  {
    title: "Mis vehículos",
    url: "/vehiculos",
    iosIcon: carSport,
    mdIcon: carSport,
  },
  {
    title: "Perfil",
    url: "/profile",
    iosIcon: personSharp,
    mdIcon: personSharp,
  },
  {
    title: "Cerrar Sesión",
    url: "/",
    iosIcon: logOutSharp,
    mdIcon: logOutSharp,
  },
];

const Menu = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>
            {/* <img src="../assets/images/logo.png" width="50%" /> */}
            <img src="https://ciudadanoscomprometidos.com.mx/SRD/assets/img/logo.png" width="50%" />
          </IonListHeader>
          {/* <IonNote style={{ marginTop: 10, marginLeft: 5 }}>SDR</IonNote> */}
          <IonNote style={{ marginTop: 10, marginLeft: 5 }}></IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? "selected" : ""} href={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
