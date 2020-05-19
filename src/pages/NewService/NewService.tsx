import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  IonContent,
  IonPage,
  IonInput,
  IonItem,
  IonList,
  IonButton,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonImg,
  IonLabel,
  IonTextarea,
  IonSelectOption,
  IonSelect,
} from "@ionic/react";
// import ExploreContainer from "../../components/ExploreContainer";
import "./NewService.css";
import iconclose from "../../image/icon-close.png";

const NewService: React.FC = () => {
  const [pets, setPets] = useState<string[]>([]);
  const [text, setText] = useState("");
  return (
    <IonPage className="container">
      <IonHeader className="ion-no-border bg">
        <IonToolbar color="blue">
          <IonList color="blue" className="addService__width">
            <IonButtons slot="end">
              <Link to="/home">
                <IonImg src={iconclose} />
              </Link>
            </IonButtons>

            <IonTitle className="ion-text-left title-white">
              Add New Service
            </IonTitle>
          </IonList>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList className="addService__list">
          <IonItem className="addService__item" lines="none" id="rounded">
            <IonLabel>Service Name</IonLabel>
            <IonSelect
              className="ion-padding-end"
              multiple={false}
              value={pets}
              onIonChange={(e) => setPets(e.detail.value)}
            >
              <IonSelectOption value="service1">Service 1</IonSelectOption>
              <IonSelectOption value="service2">Service 2</IonSelectOption>
              <IonSelectOption value="service3">Service 3</IonSelectOption>
              <IonSelectOption value="service4">Service 4</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem className="addService__item" lines="none">
            <IonLabel position="floating">Billing Rate</IonLabel>
            <IonInput placeholder="Rate per hour"></IonInput>
          </IonItem>
          <IonItem className="addService__item" lines="none">
            <IonLabel position="floating">Description</IonLabel>
            <IonTextarea
              className="height"
              value={text}
              onIonChange={(e) => setText(e.detail.value!)}
            ></IonTextarea>
          </IonItem>
          {/* <IonButton color="button" className="addService__btn" expand="block"> */}
          <IonButton className="btn" size="default" expand="block">
            Add Service
          </IonButton>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default NewService;
