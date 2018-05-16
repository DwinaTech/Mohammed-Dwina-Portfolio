import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-12"> 
          <ul className="list-inline social-buttons">
            <li className="list-inline-item">
              <Link to="https://twitter.com/diwna201" target="blanket">
                <i className="fa fa-twitter" />
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="https://www.facebook.com/DwinaTech/" target="blanket">
                <i className="fa fa-facebook" />
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="https://www.linkedin.com/in/mohammed-dwina-3842b1141/" target="blanket">
                <i className="fa fa-linkedin" />
              </Link>
            </li>
          </ul>
          <span className="copyright">Copyright &copy; DwinaTech 2018</span> 
        </div>
      </div>
    </div>
  </footer>
)

export default Footer;