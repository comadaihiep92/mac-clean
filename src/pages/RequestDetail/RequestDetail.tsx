import React from "react";
import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonImg,
  IonList,
  IonText,
  IonRouterLink,
  IonButton,
} from "@ionic/react";

import "./RequestDetail.css";
import banner2 from "../../image/banner2.jpg";
import iconStar from "../../image/icon-star.png";
import iconProfile from "../../image/avata.png";
import iconAdress from "../../image/icon-address.png";
import iconBack from "../../image/icon-arrow-back.png";

const RequestDetail: React.FC = () => {
  return (
    <IonPage className="input menu-animated">
      <IonHeader className="ion-no-border bg">
        <IonToolbar color="blue">
          <IonButtons slot="start">
            <IonRouterLink
              href="/servicerequest"
              className="shadow"
              auto-hide="false"
            >
              <IonImg className="imgBack" src={iconBack} />
            </IonRouterLink>
          </IonButtons>

          <IonTitle className="ion-text-center title-white">
            Request Detail
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonImg src={banner2} />

        <IonList className="service__list">
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
          <IonList>
            <IonList className="detail__flex">
              <IonText>Reviews</IonText>
              <IonRouterLink className="detail__link">View all</IonRouterLink>
            </IonList>
            <IonList className="detail__flex detail__column">
              <IonList className="detail__item">
                <IonList className="listReview bgNone margin10">
                  <IonText className="service__rate rate--small">5.0</IonText>
                  <IonList className="listRate bgNone">
                    <IonImg
                      className="service__icon smallStar star--small"
                      src={iconStar}
                    />
                    <IonImg
                      className="service__icon smallStar star--small"
                      src={iconStar}
                    />
                    <IonImg
                      className="service__icon smallStar star--small"
                      src={iconStar}
                    />
                    <IonImg
                      className="service__icon smallStar star--small"
                      src={iconStar}
                    />
                    <IonImg
                      className="service__icon smallStar star--small"
                      src={iconStar}
                    />
                  </IonList>
                  <IonText className="colorGray nameComment">Ahmed</IonText>
                </IonList>
                <IonText>
                  A serious professional who does his best at all time
                </IonText>
              </IonList>
              <IonList className="detail__item">
                <IonList className="listReview bgNone margin10">
                  <IonText className="service__rate rate--small">5.0</IonText>
                  <IonList className="listRate bgNone">
                    <IonImg
                      className="service__icon smallStar star--small"
                      src={iconStar}
                    />
                    <IonImg
                      className="service__icon smallStar star--small"
                      src={iconStar}
                    />
                    <IonImg
                      className="service__icon smallStar star--small"
                      src={iconStar}
                    />
                    <IonImg
                      className="service__icon smallStar star--small"
                      src={iconStar}
                    />
                    <IonImg
                      className="service__icon smallStar star--small"
                      src={iconStar}
                    />
                  </IonList>
                  <IonText className="colorGray nameComment">Ahmed</IonText>
                </IonList>
                <IonText>
                  A serious professional who does his best at all time
                </IonText>
              </IonList>
            </IonList>
          </IonList>
          <IonButton size="large" className="btn" expand="block">
            Accept
          </IonButton>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default RequestDetail;
