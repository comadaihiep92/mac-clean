import React from "react";
// import { Link } from "react-router-dom";
import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
  IonFab,
  IonFabButton,
} from "@ionic/react";

// import ExploreContainer from "../../components/ExploreContainer";
import "./Home.css";
import iconmenu from "../../image/icon-menu.png";
import banner from "../../image/banner.jpg";
import iconcons from "../../image/icon-cons.png";
import iconevent from "../../image/icon-event.png";
import iconfumi from "../../image/icon-fumi.png";
import iconindu from "../../image/icon-indu.png";
import iconoffice from "../../image/icon-office.png";
import iconresi from "../../image/icon-resi.png";
import iconadd from "../../image/icon-add.png";

const Home: React.FC = () => {
  return (
    <IonPage className="container menu-animated">
      <IonHeader className="ion-no-border bg">
        <IonToolbar color="gray">
          <IonButtons slot="start">
            <IonMenuButton className="shadow" auto-hide="false">
              <IonImg className="iconButton" src={iconmenu} />
            </IonMenuButton>
          </IonButtons>

          <IonTitle className="ion-text-center title">FindCleaner</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonImg src={banner} />
        <IonGrid className="wrapper">
          <IonRow className="listTab">
            <IonCol className="itemHome">
              <IonImg className="sizeImg" src={iconoffice} />
              <p>Office</p>
            </IonCol>
            <IonCol className="itemHome">
              <IonImg className="sizeImg" src={iconindu} />
              <p>Inductrial</p>
            </IonCol>
          </IonRow>
          <IonRow className="listTab">
            <IonCol className="itemHome">
              <IonImg className="sizeImg" src={iconfumi} />
              <p>Fumigation & pest control</p>
            </IonCol>
            <IonCol className="itemHome">
              <IonImg className="sizeImg" src={iconresi} />
              <p>Residential</p>
            </IonCol>
          </IonRow>
          <IonRow className="listTab">
            <IonCol className="itemHome">
              <IonImg className="sizeImg" src={iconcons} />
              <p>Construction</p>
            </IonCol>
            <IonCol className="itemHome">
              <IonImg className="sizeImg" src={iconevent} />
              <p>Event</p>
            </IonCol>
          </IonRow>
          <IonFab horizontal="end">
            <IonFabButton color="blue" size="small" href="/newservice">
              <IonImg className="img-width" src={iconadd} />
            </IonFabButton>
          </IonFab>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
