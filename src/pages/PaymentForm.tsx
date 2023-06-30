import { PaymentElement, useElements } from "@stripe/react-stripe-js";

export const PaymentForm = () => {
  const handleSubmit = () => {
    console.log(elements);
  };

  const elements = useElements();

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button>Submit</button>
    </form>
  );
};
