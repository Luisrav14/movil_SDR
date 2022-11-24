import PageTemplate from "../components/PageTemplate";
import PaymentForm from "../components/PaymentForm";

const Payment = () => {
  return (
    <>
      <PageTemplate title="Métodos de Pago">
        <PaymentForm />
      </PageTemplate>
    </>
  );
};

export default Payment;
