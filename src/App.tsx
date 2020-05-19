import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonRouterOutlet,
  IonMenu,
  IonHeader,
  IonContent,
  IonToolbar,
  IonList,
  IonItem,
  IonImg,
  IonRouterLink,
  IonText,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
// import { Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";

import NewService from "./pages/NewService/NewService";
import Summary from "./pages/Summary/Summary";
import ServiceRequest from "./pages/ServiceRequest/ServiceRequest";
import RequestDetail from "./pages/RequestDetail/RequestDetail";
import Profile from "./pages/Profile/Profile";
import Earnings from "./pages/Earnings/Earnings";
// import Page from "./pages/Page";
// import Menu from "./components/Menu";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import iconAvata from "./image/avata.png";
import iconArrow from "./image/icon-arrow.png";
import iconHome from "./image/icon-home.png";
import iconSummary from "./image/icon-summary.png";
import iconService from "./image/icon-service.png";
import iconProfile from "./image/icon-profile.png";
import iconEarning from "./image/icon-earning.png";
import iconLogout from "./image/icon-logout.png";

const App: React.FC = () => (
  <IonApp className="container">
    <IonMenu contentId="content1" side="start">
      <IonHeader className="ion-padding-horizontal ion-padding-vertical">
        <IonToolbar>
          <IonList className="listTitle">
            <IonImg className="imgAvata" src={iconAvata} />
            <IonList className="titleMenu">
              <IonText color="blue">Mira SK</IonText>
              <IonText className="email">infodymira@gmail.com</IonText>
            </IonList>
            {/* <Link to="/newservice" className="highlight"> */}
            <IonRouterLink href="/profile">
              <IonImg className="imgArrow" src={iconArrow} />
            </IonRouterLink>

            {/* </Link> */}
          </IonList>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList className="ion-padding-horizontal">
          <IonRouterLink href="/home">
            <IonItem>
              <IonImg className="imgMenu" src={iconHome} />
              <p className="textMenu">Home</p>
            </IonItem>
          </IonRouterLink>
          <IonRouterLink href="/summary">
            <IonItem>
              <IonImg className="imgMenu" src={iconSummary} />
              <p className="textMenu">Summary</p>
            </IonItem>
          </IonRouterLink>
          <IonRouterLink href="/servicerequest">
            <IonItem>
              <IonImg className="imgMenu" src={iconService} />
              <p className="textMenu">Service Requsets</p>
            </IonItem>
          </IonRouterLink>
          <IonRouterLink href="/profile">
            <IonItem>
              <IonImg className="imgMenu" src={iconProfile} />
              <p className="textMenu">Profile</p>
            </IonItem>
          </IonRouterLink>
          <IonRouterLink href="/earnings">
            <IonItem>
              <IonImg className="imgMenu" src={iconEarning} />
              <p className="textMenu">Earnings</p>
            </IonItem>
          </IonRouterLink>
          <IonRouterLink href="/login">
            <IonItem>
              <IonImg className="imgMenu" src={iconLogout} />
              <p className="textMenu">Logout</p>
            </IonItem>
          </IonRouterLink>
        </IonList>
      </IonContent>
    </IonMenu>
    <IonRouterOutlet id="content1"></IonRouterOutlet>
    <IonReactRouter>
      <Route path="/home" component={Home} exact={true} />
      <Route exact path="/" render={() => <Redirect to="/Login" />} />
      <Route path="/login" component={Login} exact={true} />
      <Route path="/signup" component={SignUp} exact={true} />
      {/* <Route path="/menu" component={Menu} exact={true} /> */}
      <Route path="/newservice" component={NewService} exact={true} />
      <Route path="/summary" component={Summary} exact={true} />
      <Route path="/servicerequest" component={ServiceRequest} exact={true} />
      <Route path="/requestdetail" component={RequestDetail} exact={true} />
      <Route path="/profile" component={Profile} exact={true} />
      <Route path="/earnings" component={Earnings} exact={true} />

      {/* <IonSplitPane contentId="main">
        <Menu />
        <IonRouterOutlet id="main">
          <Route path="/page/:name" component={Page} exact />
          <Redirect from="/" to="/page/Inbox" exact />
        </IonRouterOutlet>
      </IonSplitPane> */}
    </IonReactRouter>
  </IonApp>
);

export default App;
