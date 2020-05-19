import React from "react";

import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonImg,
  IonList,
  IonText,
} from "@ionic/react";

import "./Earnings.css";
import iconmenu2 from "../../image/icon-menu-nobg.png";
import banner2 from "../../image/banner2.jpg";
import iconTotal from "../../image/icon-total.png";
import iconRevenue from "../../image/icon-revenue.png";
import iconSche from "../../image/icon-sche.png";
import iconCalcel from "../../image/icon-cancel.png";

import iconStar from "../../image/icon-star.png";
import iconProfile from "../../image/avata.png";
import iconAdress from "../../image/icon-address.png";
import iconBack from "../../image/icon-arrow-back.png";

const Earnings: React.FC = () => {
  return (
    <IonPage className="input menu-animated">
      <IonHeader className="ion-no-border bg">
        <IonToolbar color="blue">
          <IonButtons slot="start">
            <IonMenuButton className="shadow" auto-hide="false">
              <IonImg src={iconmenu2} />
            </IonMenuButton>
          </IonButtons>

          <IonTitle className="ion-text-center title-white">Earnings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonImg src={banner2} />

        <IonList className="summary__list">
          <IonList className="service__item detail">
            <IonImg
              className="service__img imgAvata avataWhite"
              src={iconProfile}
            />
            <IonList className="service__info">
              <IonList className="service__info-list detailColumn">
                <IonText className="service__name request__name">
                  Ayushkman Abhishek
                </IonText>
                <IonList className="listReview">
                  <IonText className="service__rate">5.0</IonText>
                  <IonList className="listRate">
                    <IonImg
                      className="service__icon smallStar"
                      src={iconStar}
                    />
                    <IonImg
                      className="service__icon smallStar"
                      src={iconStar}
                    />
                    <IonImg
                      className="service__icon smallStar"
                      src={iconStar}
                    />
                    <IonImg
                      className="service__icon smallStar"
                      src={iconStar}
                    />
                    <IonImg
                      className="service__icon smallStar"
                      src={iconStar}
                    />
                  </IonList>
                  <IonText className="colorGray">(20 Reviews)</IonText>
                </IonList>
              </IonList>
              <IonList className="listAdress">
                <IonImg className="iconAdress" src={iconAdress} />
                <IonText className="colorGray">Karachi, Pakistan</IonText>
              </IonList>
            </IonList>
          </IonList>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Earnings;
