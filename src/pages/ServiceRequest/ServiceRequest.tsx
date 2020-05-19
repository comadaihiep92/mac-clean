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
  IonRouterLink,
} from "@ionic/react";

import "./ServiceRequest.css";
import iconmenu2 from "../../image/icon-menu-nobg.png";
import banner2 from "../../image/banner2.jpg";
import iconStar from "../../image/icon-star.png";
import iconProfile from "../../image/avata.png";

const ServiceRequest: React.FC = () => {
  return (
    <IonPage className="input menu-animated">
      <IonHeader className="ion-no-border bg">
        <IonToolbar color="blue">
          <IonButtons slot="start">
            <IonMenuButton className="shadow" auto-hide="false">
              <IonImg src={iconmenu2} />
            </IonMenuButton>
          </IonButtons>

          <IonTitle className="ion-text-center title-white">
            Service Request
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonImg src={banner2} />

        <IonList className="service__list">
          <IonRouterLink href="/requestdetail">
            <IonList className="service__item">
              <IonImg className="service__img imgAvata " src={iconProfile} />
              <IonList className="service__info">
                <IonList className="service__info-list">
                  <IonText className="service__name">John Terry</IonText>
                  <IonImg className="service__icon" src={iconStar} />
                  <IonText className="service__rate">5.0</IonText>
                </IonList>
                <IonList>
                  <IonText className="service__date">
                    Friday, 20-12-2018
                  </IonText>
                </IonList>
                <IonList className="service__request request--new">
                  New Request
                </IonList>
              </IonList>
              <IonText className="service__price">₦ 300.00</IonText>
            </IonList>
          </IonRouterLink>
          <IonRouterLink href="/requestdetail">
            <IonList className="service__item">
              <IonImg className="service__img imgAvata " src={iconProfile} />
              <IonList className="service__info">
                <IonList className="service__info-list">
                  <IonText className="service__name">Ahmed Ali</IonText>
                  <IonImg className="service__icon" src={iconStar} />
                  <IonText className="service__rate">5.0</IonText>
                </IonList>
                <IonList>
                  <IonText className="service__date">
                    Friday, 20-12-2018
                  </IonText>
                </IonList>
                <IonList className="service__request request--completed">
                  Completed
                </IonList>
              </IonList>
              <IonText className="service__price">₦ 300.00</IonText>
            </IonList>
          </IonRouterLink>
          <IonRouterLink href="/requestdetail">
            <IonList className="service__item">
              <IonImg className="service__img imgAvata " src={iconProfile} />
              <IonList className="service__info">
                <IonList className="service__info-list">
                  <IonText className="service__name">Ahmed Ali</IonText>
                  <IonImg className="service__icon" src={iconStar} />
                  <IonText className="service__rate">5.0</IonText>
                </IonList>
                <IonList>
                  <IonText className="service__date">
                    Friday, 20-12-2018
                  </IonText>
                </IonList>
                <IonList className="service__request request--completed">
                  Completed
                </IonList>
              </IonList>
              <IonText className="service__price">₦ 300.00</IonText>
            </IonList>
          </IonRouterLink>
          <IonRouterLink href="/requestdetail">
            <IonList className="service__item">
              <IonImg className="service__img imgAvata " src={iconProfile} />
              <IonList className="service__info">
                <IonList className="service__info-list">
                  <IonText className="service__name">Ahmed Ali</IonText>
                  <IonImg className="service__icon" src={iconStar} />
                  <IonText className="service__rate">5.0</IonText>
                </IonList>
                <IonList>
                  <IonText className="service__date">
                    Friday, 20-12-2018
                  </IonText>
                </IonList>
                <IonList className="service__request request--completed">
                  Completed
                </IonList>
              </IonList>
              <IonText className="service__price">₦ 300.00</IonText>
            </IonList>
          </IonRouterLink>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default ServiceRequest;
