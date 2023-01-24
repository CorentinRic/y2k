import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

function Error() {
  return (
    <main className="error">
      <section className="error__container">
        <h1 className="error__title">404</h1>
        <div className="error__content">
          <h2>Error 404</h2>
          <p>Page non trouvée.</p>
          <Link to="/" className="error__link italic">
            Accueil
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Error;
