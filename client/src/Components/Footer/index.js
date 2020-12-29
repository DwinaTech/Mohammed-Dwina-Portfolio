import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

const facebook = `${process.env.PUBLIC_URL}/images/facebook.png`;
const twitter = `${process.env.PUBLIC_URL}/images/twitter.png`;
const linkedIn = `${process.env.PUBLIC_URL}/images/linkedIn.png`;

const date = new Date();
const fullYear = date.getFullYear();

const Footer = () => (
  <footer className="footer">
    <div className="container social">
      <Link to="https://twitter.com/diwna201" target="blanket">
        <img src={twitter} alt="twitter" />
      </Link>
      <Link to="https://www.facebook.com/DwinaTech/" target="blanket">
        <img src={facebook} alt="facebook" />
      </Link>
      <Link
        to="https://www.linkedin.com/in/mohammed-dwina-3842b1141/"
        target="blanket"
      >
        <img src={linkedIn} alt="linkedIn" />
      </Link>
    </div>
    <span className="copyright">&copy; Copy rights DwinaTech {fullYear}</span>
  </footer>
);

export default Footer;
