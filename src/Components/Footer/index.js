import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="container social">
      <Link to="https://twitter.com/diwna201" target="blanket">
        <i className="fa fa-twitter" />
      </Link>
      <Link to="https://www.facebook.com/DwinaTech/" target="blanket">
        <i className="fa fa-facebook" />
      </Link>
      <Link to="https://www.linkedin.com/in/mohammed-dwina-3842b1141/" target="blanket">
        <i className="fa fa-linkedin" />
      </Link>
    </div>
    <span className="copyright">Copyright &copy; DwinaTech 2018</span>
  </footer>
)

export default Footer;