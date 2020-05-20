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
  IonRouterLink,
  IonButton,
  IonFab,
  IonFabButton,
  IonItem,
  IonLabel,
  IonInput,
  IonFooter,
} from "@ionic/react";

import "./Profile.css";
import banner2 from "../../image/banner2.jpg";
import iconEdit from "../../image/icon-edit.png";
import iconProfile from "../../image/avata.png";
import iconBack from "../../image/icon-arrow-back.png";

const Profile: React.FC = () => {
  return (
    <IonPage className="container">
      <IonHeader className="ion-no-border bg">
        <IonToolbar color="blue">
          <IonButtons slot="start">
            <IonRouterLink href="/home" className="shadow" auto-hide="false">
              <IonImg className="imgBack" src={iconBack} />
            </IonRouterLink>
          </IonButtons>

          <IonTitle className="ion-text-center title-white">Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonImg src={banner2} />

        <IonList className="service__list">
          <IonList className="service__item detail noborderProfile">
            <IonImg
              className="service__img imgAvata avataWhite noMarginProfile"
              src={iconProfile}
            />
            <IonFab
              vertical="top"
              horizontal="end"
              slot="fixed"
              className="btnEdit"
            >
              <IonFabButton size="small" className="colorWhite">
                <IonImg className="iconEdit" src={iconEdit} />
              </IonFabButton>
            </IonFab>
            <IonList className="profile__list">
              <IonItem className="addService__item" lines="none">
                <IonLabel
                  color="label"
                  position="floating"
                  className="labelProfile"
                >
                  First Name
                </IonLabel>
                <IonInput
                  color="input"
                  className="inputProfile"
                  placeholder="Dester"
                ></IonInput>
              </IonItem>
              <IonItem className="addService__item" lines="none">
                <IonLabel
                  color="label"
                  position="floating"
                  className="labelProfile"
                >
                  Last Name
                </IonLabel>
                <IonInput
                  color="input"
                  className="inputProfile"
                  placeholder="Hamohao"
                ></IonInput>
              </IonItem>
            </IonList>
          </IonList>

          <IonButton className="btn" size="large" expand="block">
            Update
          </IonButton>
        </IonList>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonButton
            href="/editpassword"
            size="large"
            className="btn"
            expand="block"
          >
            Change Password
          </IonButton>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Profile;
