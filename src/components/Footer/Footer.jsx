import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { BsArrowRightShort } from "react-icons/bs";
import {
  TiSocialVimeoCircular,
  TiSocialInstagram,
  TiSocialFacebookCircular,
  TiSocialYoutubeCircular,
  TiSocialTwitterCircular,
  TiMail,
} from "react-icons/ti";

function Footer() {
  return (
    <footer>
      <div className="footer-link">
        <div className="footer-link-content">
          <h2>Contact</h2>
          <div className="footer-link-container">
            <a
              className="btn footer-links"
              target="_blank"
              rel="noreferrer"
              href="https://vimeo.com/fr"
              aria-label="Lien réseau social."
            >
              <TiSocialVimeoCircular />
            </a>
            <a
              className="btn footer-links"
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/?hl=fr"
              aria-label="Lien réseau social."
            >
              <TiSocialInstagram />
            </a>
            <a
              className="btn footer-links"
              target="_blank"
              rel="noreferrer"
              href="https://fr-fr.facebook.com/"
              aria-label="Lien réseau social."
            >
              <TiSocialFacebookCircular />
            </a>
            <a
              className="btn footer-links"
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/"
              aria-label="Lien réseau social."
            >
              <TiSocialYoutubeCircular />
            </a>
            <a
              className="btn footer-links"
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/?lang=fr"
              aria-label="Lien réseau social."
            >
              <TiSocialTwitterCircular />
            </a>
          </div>
          <a
            className="btn footer-links"
            target="_blank"
            rel="noreferrer"
            href="mailto:contact@y2k.fr"
            aria-label="E-mail"
          >
            <TiMail />
            contact@y2k.fr
          </a>
        </div>
        <div className="footer-legal">
          <Link className="btn footer-links legal-link btn" to="/notices">
            <BsArrowRightShort />
            Mentions légales
          </Link>
          <p className="footer-signature">CORENTIN RICHARD © 2022.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
