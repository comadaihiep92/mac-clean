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
  IonFooter,
  IonSelect,
  IonSelectOption,
  IonText,
  IonDatetime,
  IonRadio,
  IonRadioGroup,
  IonTextarea,
} from "@ionic/react";
// import ExploreContainer from "../../components/ExploreContainer";
import "./CleaningServiceRequest.css";
import iconclose from "../../image/icon-close.png";
import iconDrop from "../../image/icon-drop.png";
import iconCheck from "../../image/icon-check.png";
import iconCash from "../../image/icon-cash.png";
import iconCard from "../../image/icon-card.png";
import iconCalendar from "../../image/icon-calendar.png";

const CleaningServiceRequest: React.FC = () => {
  const [country, setCountry] = useState<string[]>(["Egypt"]);
  const [selectedDate, setSelectedDate] = useState<string>(
    "2012-12-15T13:47:20.789"
  );
  const [selected, setSelected] = useState<string>("1 Toilet");
  const [cleaners, setCleaners] = useState<string>("3 Toilet");
  const [pet, setPet] = useState<string>("yes");
  const [products, setProducts] = useState<string>("yes");
  const [equipment, setEquipment] = useState<string>("yes");
  const [pay, setPay] = useState<string>("card");
  // const [text, setText] = useState("");
  return (
    <IonPage className="container">
      <IonHeader className="ion-no-border bg">
        <IonToolbar color="blue">
          <IonList color="blue" className="addService__width">
            <IonButtons slot="end">
              <Link to="/homecustomer">
                <IonImg src={iconclose} />
              </Link>
            </IonButtons>

            <IonTitle className="ion-text-left title-white">
              Cleaning Service Request
            </IonTitle>
          </IonList>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList className="addService__list">
          <IonList>
            <IonText className="cleaning__title">Where?</IonText>
            <IonItem
              className="addService__item cleaning__margintop"
              lines="none"
              id="rounded"
            >
              <IonSelect
                color="input"
                className="ion-padding-end noFlat"
                multiple={false}
                value={country}
                onIonChange={(e) => setCountry(e.detail.value)}
              >
                <IonSelectOption color="input" value="Egypt">
                  Egypt
                </IonSelectOption>
                <IonSelectOption color="input" value="service2">
                  Service 2
                </IonSelectOption>
                <IonSelectOption color="input" value="service3">
                  Service 3
                </IonSelectOption>
                <IonSelectOption color="input" value="service4">
                  Service 4
                </IonSelectOption>
              </IonSelect>
              <IonImg className="icon__input-right" src={iconDrop} />
            </IonItem>
          </IonList>

          <IonList>
            <IonText className="cleaning__title">When?</IonText>
            <IonItem
              className="addService__item cleaning__margintop"
              lines="none"
            >
              <IonDatetime
                color="input"
                displayFormat="DD - MM - YYYY"
                placeholder="Select Date"
                value={selectedDate}
                onIonChange={(e) => setSelectedDate(e.detail.value!)}
              ></IonDatetime>

              <IonImg className="icon__input-right" src={iconCalendar} />
            </IonItem>
          </IonList>
          <IonList>
            <IonText className="cleaning__title">
              How many bathrooms / toilet?
            </IonText>
            <IonRadioGroup
              value={selected}
              onIonChange={(e) => setSelected(e.detail.value)}
            >
              <IonList className="listRadio">
                <IonItem
                  lines="none"
                  className="ion-no-padding ion-no-margin noPad"
                >
                  <IonRadio
                    className="styleRadio"
                    slot="start"
                    value="1 Toilet"
                  />
                  <IonImg className="iconRadio showIcon" src={iconCheck} />
                  <IonList className="listRadio__item checkList">
                    <IonLabel className="flexLabelCleaning">
                      <IonLabel className="blueNum">1</IonLabel>Toilet
                    </IonLabel>
                  </IonList>
                </IonItem>
                <IonItem
                  lines="none"
                  className="ion-no-padding ion-no-margin noPad"
                >
                  <IonRadio
                    className="styleRadio"
                    slot="start"
                    value="2 Toilet"
                  />
                  <IonImg className="iconRadio" src={iconCheck} />
                  <IonList className="listRadio__item">
                    <IonLabel className="flexLabelCleaning">
                      2 <IonLabel>Toilet</IonLabel>
                    </IonLabel>
                  </IonList>
                </IonItem>
                <IonItem
                  lines="none"
                  className="ion-no-padding ion-no-margin noPad"
                >
                  <IonRadio
                    className="styleRadio"
                    slot="start"
                    value="3 Toilet"
                  />
                  <IonImg className="iconRadio" src={iconCheck} />
                  <IonList className="listRadio__item">
                    <IonLabel className="flexLabelCleaning">
                      3 <IonLabel>Toilet</IonLabel>
                    </IonLabel>
                  </IonList>
                </IonItem>
                <IonItem
                  lines="none"
                  className="ion-no-padding ion-no-margin noPad"
                >
                  <IonRadio
                    className="styleRadio"
                    slot="start"
                    value="4 Toilet"
                  />
                  <IonImg className="iconRadio" src={iconCheck} />
                  <IonList className="listRadio__item">
                    <IonLabel className="flexLabelCleaning">
                      5 <IonLabel>Toilet</IonLabel>
                    </IonLabel>
                  </IonList>
                </IonItem>
              </IonList>
            </IonRadioGroup>
          </IonList>
          <IonList>
            <IonText className="cleaning__title">How many open spaces?</IonText>
            <IonItem
              className="addService__item cleaning__margintop"
              lines="none"
              id="rounded"
            >
              <IonInput
                placeholder="5"
                color="input"
                className="ion-padding-end"
              ></IonInput>
            </IonItem>
          </IonList>
          <IonList>
            <IonText className="cleaning__title">
              How many cleaners needed?
            </IonText>
            <IonRadioGroup
              value={cleaners}
              onIonChange={(e) => setCleaners(e.detail.value)}
            >
              <IonList className="listRadio">
                <IonItem
                  lines="none"
                  className="ion-no-padding ion-no-margin noPad"
                >
                  <IonRadio
                    className="styleRadio"
                    slot="start"
                    value="3 Cleaners"
                  />
                  <IonImg className="iconRadio showIcon" src={iconCheck} />
                  <IonList className="listRadio__item checkList">
                    <IonLabel className="flexLabelCleaning">
                      <IonLabel className="blueNum">3</IonLabel>Cleaners
                    </IonLabel>
                  </IonList>
                </IonItem>
                <IonItem
                  lines="none"
                  className="ion-no-padding ion-no-margin noPad"
                >
                  <IonRadio
                    className="styleRadio"
                    slot="start"
                    value="5 Cleaners"
                  />
                  <IonImg className="iconRadio" src={iconCheck} />
                  <IonList className="listRadio__item">
                    <IonLabel className="flexLabelCleaning">
                      5 <IonLabel>Cleaners</IonLabel>
                    </IonLabel>
                  </IonList>
                </IonItem>
                <IonItem
                  lines="none"
                  className="ion-no-padding ion-no-margin noPad"
                >
                  <IonRadio
                    className="styleRadio"
                    slot="start"
                    value="7 Cleaners"
                  />
                  <IonImg className="iconRadio" src={iconCheck} />
                  <IonList className="listRadio__item">
                    <IonLabel className="flexLabelCleaning">
                      7 <IonLabel>Cleaners</IonLabel>
                    </IonLabel>
                  </IonList>
                </IonItem>
                <IonItem
                  lines="none"
                  className="ion-no-padding ion-no-margin noPad"
                >
                  <IonRadio
                    className="styleRadio"
                    slot="start"
                    value="9 Cleaners"
                  />
                  <IonImg className="iconRadio" src={iconCheck} />
                  <IonList className="listRadio__item">
                    <IonLabel className="flexLabelCleaning">
                      9 <IonLabel>Cleaners</IonLabel>
                    </IonLabel>
                  </IonList>
                </IonItem>
              </IonList>
            </IonRadioGroup>
          </IonList>
          <IonList>
            <IonText className="cleaning__title">Do you have pet?</IonText>
            <IonRadioGroup
              value={pet}
              onIonChange={(e) => setPet(e.detail.value)}
            >
              <IonList className="yesNo">
                <IonItem lines="none">
                  <IonRadio slot="start" value="yes" />
                  <IonLabel className="ion-padding-horizontal">Yes</IonLabel>
                </IonItem>

                <IonItem lines="none">
                  <IonRadio slot="start" value="no" />
                  <IonLabel className="ion-padding-horizontal">No</IonLabel>
                </IonItem>
              </IonList>
            </IonRadioGroup>
          </IonList>
          <IonList>
            <IonText className="cleaning__title">Cleaning Products?</IonText>
            <IonRadioGroup
              value={products}
              onIonChange={(e) => setProducts(e.detail.value)}
            >
              <IonList className="yesNo">
                <IonItem lines="none">
                  <IonRadio slot="start" value="yes" />
                  <IonLabel className="ion-padding-horizontal">Yes</IonLabel>
                </IonItem>

                <IonItem lines="none">
                  <IonRadio slot="start" value="no" />
                  <IonLabel className="ion-padding-horizontal">No</IonLabel>
                </IonItem>
              </IonList>
            </IonRadioGroup>
          </IonList>
          <IonList>
            <IonText className="cleaning__title">Clearing Equipment?</IonText>
            <IonRadioGroup
              value={equipment}
              onIonChange={(e) => setEquipment(e.detail.value)}
            >
              <IonList className="yesNo">
                <IonItem lines="none">
                  <IonRadio slot="start" value="yes" />
                  <IonLabel className="ion-padding-horizontal">Yes</IonLabel>
                </IonItem>

                <IonItem lines="none">
                  <IonRadio slot="start" value="no" />
                  <IonLabel className="ion-padding-horizontal">No</IonLabel>
                </IonItem>
              </IonList>
            </IonRadioGroup>
          </IonList>
          <IonList>
            <IonText className="cleaning__title">
              What are you thinking?
            </IonText>
            <IonItem
              className="addService__item cleaning__margintop"
              lines="none"
            >
              {/* <IonLabel color="label" position="floating">
                Description
              </IonLabel> */}
              <IonTextarea
                color="input"
                value="Perfect service"
                className="height"
              ></IonTextarea>
            </IonItem>
          </IonList>
          <IonList>
            <IonText className="cleaning__title">
              How would you like to pay?
            </IonText>
            <IonRadioGroup
              value={pay}
              onIonChange={(e) => setPay(e.detail.value)}
            >
              <IonList className="listRadio">
                <IonItem
                  lines="none"
                  className="ion-no-padding ion-no-margin noPad"
                >
                  <IonRadio className="styleRadio" slot="start" value="card" />
                  <IonImg className="iconRadio" src={iconCheck} />

                  <IonList className="listRadio__item checkList cleaning__card">
                    <IonLabel className="flexLabelCleaning ion-padding-end">
                      CARD
                    </IonLabel>
                    <IonImg src={iconCard} className="blueNum" />
                  </IonList>
                </IonItem>
                <IonItem
                  lines="none"
                  className="ion-no-padding ion-no-margin noPad"
                >
                  <IonRadio className="styleRadio" slot="start" value="cash" />
                  <IonImg className="iconRadio" src={iconCheck} />
                  <IonList className="listRadio__item cleaning__card">
                    <IonLabel className="flexLabelCleaning ion-padding-end">
                      CASH
                    </IonLabel>
                    <IonImg src={iconCash} className="blueNum" />
                  </IonList>
                </IonItem>
              </IonList>
            </IonRadioGroup>
          </IonList>
        </IonList>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonButton
            href="/availableproviders"
            size="large"
            className="btn"
            expand="full"
            detail-none
          >
            Continue
          </IonButton>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default CleaningServiceRequest;
