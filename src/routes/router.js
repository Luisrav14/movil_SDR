import { IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router-dom";

import Menu from "../components/Menu.jsx";

import Camara from "../pages/Camara.jsx";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Pagos from "../pages/Pagos";
import Metodos from "../pages/Payment";
import Perfil from "../pages/Perfil";
import { Propiedades } from "../pages/Propiedades.jsx";
import Register from "../pages/Register";
import { Vehiculos } from "../pages/Vehiculos.jsx";

const Router = () => {
  return (
    <IonReactRouter>
      <IonSplitPane contentId="main">
        <Menu />
        <IonRouterOutlet id="main">
          <Route path="/home" component={HomePage} exact />
          <Route path="/pagos" component={Pagos} exact />
          <Route path="/metodos" component={Metodos} exact />
          <Route path="/profile" component={Perfil} exact />
          <Route path="/propiedades" component={Propiedades} exact />
          <Route path="/vehiculos" component={Vehiculos} exact />
          <Route path="/register" component={Register} exact />
          <Route path="/" component={Login} exact />
          <Route path="/camara" component={Camara} exact />
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  );
};

export default Router;
