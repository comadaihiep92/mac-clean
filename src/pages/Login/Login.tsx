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
import "./Login.css";
import logo from "../../image/logo.png";

const Login: React.FC = () => {
  const [text, setText] = useState<string>();

  return (
    <IonPage>
      <IonContent>
        <div className="container">
          <div className="header">
            <img src={logo} alt="" />
            <h1>Hello there!</h1>
            <p>Proceed with your Login</p>
          </div>
          <IonList className="mb4">
            <IonItem className="mb6">
              <IonInput
                value={text}
                placeholder="Please Enter Your Email"
                onIonChange={(e) => setText(e.detail.value!)}
              ></IonInput>
            </IonItem>
            <IonItem className="mb10">
              <IonInput
                type="password"
                placeholder="Please Enter Your Password"
                show-hide-input
              ></IonInput>
            </IonItem>
            <IonButton className="btn" size="large" expand="full">
              Login
            </IonButton>
          </IonList>
          <div className="forgot">
            <a href="#" className="mb5">
              Forgot Password?
            </a>
            <p>
              Don’t have an Account{" "}
              <a href="/signup" className="highlight">
                sign Up
              </a>
            </p>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
