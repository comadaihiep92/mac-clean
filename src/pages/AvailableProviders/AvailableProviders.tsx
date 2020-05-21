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

import "./AvailableProviders.css";
import iconBack from "../../image/icon-arrow-back.png";
import banner2 from "../../image/banner2.jpg";
import iconStar from "../../image/icon-star.png";
import iconProfile from "../../image/avata.png";

const AvailableProviders: React.FC = () => {
  return (
    <IonPage className="input menu-animated">
      <IonHeader className="ion-no-border bg">
        <IonToolbar color="blue">
          <IonButtons slot="start">
            <IonRouterLink
              href="/cleaningservicerequest"
              className="shadow"
              auto-hide="false"
            >
              <IonImg className="imgBack" src={iconBack} />
            </IonRouterLink>
          </IonButtons>

          <IonTitle className="ion-text-center title-white">
            Available Providers
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonImg src={banner2} />

        <IonList className="service__list">
          <IonRouterLink>
            {/* href="/providerdetail" */}
            <IonList className="service__item">
              <IonImg className="service__img imgAvata " src={iconProfile} />
              <IonList className="service__info">
                <IonList className="service__info-list">
                  <IonText className="service__name">Mira SK</IonText>
                </IonList>
                <IonList>
                  <IonText className="service__date">
                    Friday, 20-12-2018
                  </IonText>
                </IonList>
                <IonList className="service__request request--completed">
                  Available
                </IonList>
              </IonList>
              <IonText className="service__price">₦ 300.00</IonText>
            </IonList>
          </IonRouterLink>
          <IonRouterLink>
            <IonList className="service__item">
              <IonImg className="service__img imgAvata " src={iconProfile} />
              <IonList className="service__info">
                <IonList className="service__info-list">
                  <IonText className="service__name">Ahmed Ali</IonText>
                </IonList>
                <IonList>
                  <IonText className="service__date">
                    Friday, 20-12-2018
                  </IonText>
                </IonList>
                <IonList className="service__request request--new">
                  Unavailable
                </IonList>
              </IonList>
              <IonText className="service__price">₦ 600.00</IonText>
            </IonList>
          </IonRouterLink>
          <IonRouterLink>
            <IonList className="service__item">
              <IonImg className="service__img imgAvata " src={iconProfile} />
              <IonList className="service__info">
                <IonList className="service__info-list">
                  <IonText className="service__name">Mira SK</IonText>
                </IonList>
                <IonList>
                  <IonText className="service__date">
                    Friday, 20-12-2018
                  </IonText>
                </IonList>
                <IonList className="service__request request--completed">
                  Available
                </IonList>
              </IonList>
              <IonText className="service__price">₦ 400.00</IonText>
            </IonList>
          </IonRouterLink>
          <IonRouterLink>
            <IonList className="service__item">
              <IonImg className="service__img imgAvata " src={iconProfile} />
              <IonList className="service__info">
                <IonList className="service__info-list">
                  <IonText className="service__name">Aysha MK</IonText>
                </IonList>
                <IonList>
                  <IonText className="service__date">
                    Friday, 20-12-2018
                  </IonText>
                </IonList>
                <IonList className="service__request request--completed">
                  Available
                </IonList>
              </IonList>
              <IonText className="service__price">₦ 600.00</IonText>
            </IonList>
          </IonRouterLink>
          <IonRouterLink>
            <IonList className="service__item">
              <IonImg className="service__img imgAvata " src={iconProfile} />
              <IonList className="service__info">
                <IonList className="service__info-list">
                  <IonText className="service__name">Mira SK</IonText>
                </IonList>
                <IonList>
                  <IonText className="service__date">
                    Friday, 20-12-2018
                  </IonText>
                </IonList>
                <IonList className="service__request request--new">
                  Available
                </IonList>
              </IonList>
              <IonText className="service__price">₦ 700.00</IonText>
            </IonList>
          </IonRouterLink>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default AvailableProviders;
