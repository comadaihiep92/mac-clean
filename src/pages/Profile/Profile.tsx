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
  IonFab,
  IonFabButton,
  IonIcon,
  IonItem,
  IonLabel,
  IonInput,
  IonFooter,
} from "@ionic/react";

import "./Profile.css";
import banner2 from "../../image/banner2.jpg";
import iconEdit from "../../image/icon-edit.png";
import iconProfile from "../../image/avata.png";
import iconAdress from "../../image/icon-address.png";
import iconBack from "../../image/icon-arrow-back.png";

const Profile: React.FC = () => {
  return (
    <IonPage className="container">
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
            <IonFabButton size="small" className="btnEdit">
              <IonImg className="iconEdit" src={iconEdit} />
            </IonFabButton>
            <IonList className="profile__list">
              <IonItem className="addService__item" lines="none">
                <IonLabel position="floating" className="labelProfile">
                  First Name
                </IonLabel>
                <IonInput className="inputProfile"></IonInput>
              </IonItem>
              <IonItem className="addService__item" lines="none">
                <IonLabel position="floating" className="labelProfile">
                  Last Name
                </IonLabel>
                <IonInput className="inputProfile"></IonInput>
              </IonItem>
            </IonList>
          </IonList>

          <IonButton className="btn" expand="block">
            Update
          </IonButton>
        </IonList>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonButton href="/editpassword" className="btn" expand="block">
            Change Password
          </IonButton>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Profile;
