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
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const [user, setText] = useState("");
  const [password, setPassword] = useState("");

  function loginUser() {
    if (user === "admin" && password === "admin") {
      console.log("Login susscess: ", user, password);
    } else {
      console.log("Error email or pass");
    }
  }

  return (
    <IonPage>
      <IonContent className="container">
        <div className="list-custom">
          <div className="header">
            <img src={logo} alt="" />
            <h1>Hello there!</h1>
            <p>Proceed with your Login</p>
          </div>
          <IonList className="mb4">
            <IonItem className="input-custom" lines="none">
              <IonInput
                type="email"
                placeholder="Please Enter Your Email"
                onIonChange={(e: any) => setText(e.target.value)}
              ></IonInput>
            </IonItem>
            <IonItem className="input-custom" lines="none">
              <IonInput
                type="password"
                placeholder="Please Enter Your Password"
                show-hide-input
                onIonChange={(e: any) => setPassword(e.target.value)}
              ></IonInput>
            </IonItem>
            <IonButton
              onClick={loginUser}
              className="btn"
              size="large"
              expand="block"
              routerLink="/home"
            >
              Login
            </IonButton>
          </IonList>
          <div className="forgot">
            <Link to="/forgotpassword" className="mb5">
              Forgot Password?
            </Link>
            <p>
              Don’t have an Account{" "}
              <Link to="/signup" className="highlight">
                sign Up
              </Link>
            </p>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
