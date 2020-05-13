import { IonContent, IonPage } from "@ionic/react";
import React from "react";
// import ExploreContainer from "../../components/ExploreContainer";
import "./SignUp.css";
import logo from "../../image/logo.png";

const SignUp: React.FC = () => {
  return (
    <IonPage>
      <IonContent class="test">
        <div className="flex">
          <img src={logo} alt="" />
          <h1>SignUp</h1>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SignUp;
