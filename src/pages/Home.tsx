import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { PaymentForm } from "./PaymentForm";

const stripePromise = loadStripe(
  // Place API Key here
  "{{API_KEY}}"
);

const options = {
  /* For the repro, I am just making the create payment intent request in the stripe shell and copying the client_secret from the response
   * EXAMPLE REQUEST
   * stripe setup_intents create --customer="{{CUSTOMER_ID}}" -d "payment_method_types[0]=us_bank_account" -d "payment_method_options[us_bank_account][financial_connections][permissions][0]=payment_method" -d "payment_method_options[us_bank_account][financial_connections][permissions][1]=balances"
   */
  clientSecret: "{{CLIENT_SECRET}}",
};

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Elements stripe={stripePromise} options={options}>
          <PaymentForm />
        </Elements>
      </IonContent>
    </IonPage>
  );
};

export default Home;
