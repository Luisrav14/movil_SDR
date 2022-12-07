import GeolocationButton from "../components/GeoLocation";
import PageTemplate from "../components/PageTemplate";

const HomePage = () => {
  return (
    <>
      <PageTemplate title="Trámites y Servicios">
        {/* <GeolocationButton /> */}

        <ion-card>
          <img src="https://images.unsplash.com/photo-1593182440959-9d5165b29b59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" />
          <ion-card-header>
            <ion-card-title>Predial</ion-card-title>
          </ion-card-header>
          <ion-card-content>El impuesto predial es un gravamen que funciona en todo el territorio del país, es de propiedad de los municipios y distritos, quienes tienen a su cargo su administración, recaudo y control.</ion-card-content>
          <ion-button fill="clear" href="/propiedades">
            Ver más
          </ion-button>
        </ion-card>
        <ion-card>
          <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
          <ion-card-header>
            <ion-card-title>Refrendo</ion-card-title>
          </ion-card-header>
          <ion-card-content>El impuesto anual por control vehicular que debe pagarse en México por el derecho a uso de una placa vehicular.</ion-card-content>
          <ion-button fill="clear" href="/vehiculos">
            Ver más
          </ion-button>
        </ion-card>
      </PageTemplate>
    </>
  );
};

export default HomePage;
