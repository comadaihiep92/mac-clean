import React from "react";
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
} from "@ionic/react";
// import ExploreContainer from "../../components/ExploreContainer";
import "./EditPassword.css";
import iconclose from "../../image/icon-close.png";

const EditPassword: React.FC = () => {
  // const [pets, setPets] = useState<string[]>([]);
  // const [text, setText] = useState("");
  return (
    <IonPage className="container">
      <IonHeader className="ion-no-border bg">
        <IonToolbar color="blue">
          <IonList color="blue" className="addService__width">
            <IonButtons slot="end">
              <Link to="/profile">
                <IonImg src={iconclose} />
              </Link>
            </IonButtons>

            <IonTitle className="ion-text-left title-white">
              Edit Password
            </IonTitle>
          </IonList>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList className="addService__list">
          <IonItem className="addService__item" lines="none">
            <IonLabel color="label" position="floating">
              Current Password
            </IonLabel>
            <IonInput color="input" placeholder="1e3tef54f5c4"></IonInput>
          </IonItem>
          <IonItem className="addService__item" lines="none">
            <IonLabel color="label" position="floating">
              New Password
            </IonLabel>
            <IonInput color="input" placeholder="A4cj6x86nc"></IonInput>
          </IonItem>
          <IonItem className="addService__item" lines="none">
            <IonLabel color="label" position="floating">
              Confirm Password
            </IonLabel>
            <IonInput color="input" placeholder="A4cj6x86nc"></IonInput>
          </IonItem>

          <IonButton className="btn" size="large" expand="block">
            Update
          </IonButton>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default EditPassword;
