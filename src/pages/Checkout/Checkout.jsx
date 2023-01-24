import React from "react";
import "./Checkout.css";
import bravo from "../../assets/images/bravo.gif";

function Checkout() {
  return (
    <main className="checkout__main">
      <section className="checkout__section">
        <div className="checkout__container">
          <img src={bravo} alt="bravo" />
          <h2>Merci pour votre commande.</h2>
        </div>
      </section>
    </main>
  );
}

export default Checkout;
