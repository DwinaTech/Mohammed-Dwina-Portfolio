import React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';
import facebook from '../../../public/images/facebook.png';
import twitter from '../../../public/images/twitter.png';
import linkedIn from '../../../public/images/linkedIn.png';

const Footer = () => (
  <footer className="footer">
    <div className="container social">
      <Link to="https://twitter.com/diwna201" target="blanket">
        <img src={twitter} alt="twitter" />
      </Link>
      <Link to="https://www.facebook.com/DwinaTech/" target="blanket">
        <img src={facebook} alt="facebook" />
      </Link>
      <Link to="https://www.linkedin.com/in/mohammed-dwina-3842b1141/" target="blanket">
        <img src={linkedIn} alt="linkedIn" />
      </Link>
    </div>
    <span className="copyright">Copyright &copy; DwinaTech 2018</span>
  </footer>
)

export default Footer;