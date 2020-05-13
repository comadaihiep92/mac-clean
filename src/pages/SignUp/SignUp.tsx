import {
  IonContent,
  IonPage,
  IonInput,
  IonItem,
  IonList,
  IonButton,
} from "@ionic/react";
import React, { useState } from "react";
// import ExploreContainer from "../../components/ExploreContainer";
import "./SignUp.css";
import logo from "../../image/logo.png";

const SignUp: React.FC = () => {
  const [text, setText] = useState<string>();

  return (
    <IonPage>
      <IonContent>
        <div className="container">
          <div className="header">
            <img src={logo} alt="" />
            <h1>Hello there!</h1>
            <p>Proceed with your Sign Up</p>
          </div>
          <IonList className="mb4">
            <IonItem className="mb6">
              <IonInput
                // value={text}
                placeholder="Please Enter Your FullName"
                // onIonChange={(e) => setText(e.detail.value!)}
              ></IonInput>
            </IonItem>
            <IonItem className="mb6">
              <IonInput
                // value={text}
                placeholder="Please Enter Your Email"
                // onIonChange={(e) => setText(e.detail.value!)}
              ></IonInput>
            </IonItem>
            <IonItem className="mb6">
              <IonInput
                type="password"
                placeholder="Please Enter Your Password"
                show-hide-input
              ></IonInput>
            </IonItem>
            <IonItem className="mb6">
              <IonInput
                type="password"
                placeholder="Please Confirm Your Password"
                show-hide-input
              ></IonInput>
            </IonItem>
            <IonButton className="btn" size="large" expand="full">
              Register
            </IonButton>
          </IonList>
          <div className="forgot">
            <p>
              Have an Account{" "}
              <a href="/login" className="highlight">
                Login
              </a>
            </p>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SignUp;
