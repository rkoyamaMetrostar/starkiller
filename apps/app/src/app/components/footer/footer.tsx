import logo from "../../../assets/img/logo.png";
import { Link, NavLink, useLocation } from 'react-router-dom';
import './footer.scss';

export function Footer() {
  const location = useLocation();

  return (
    <footer className="usa-footer usa-footer--slim">
      <div className="grid-container usa-footer__return-to-top">
        <a href="#">Return to top</a>
      </div>
      <div className="usa-footer__primary-section">
        <div className="usa-footer__primary-container grid-row">
          <div className="mobile-lg:grid-col-8">
            <nav className="usa-footer__nav" aria-label="Footer navigation,">
              <ul className="grid-row grid-gap">
                <li
                  className="
                mobile-lg:grid-col-6
                desktop:grid-col-auto
                usa-footer__primary-content
              "
                >
                  <NavLink
                    id="home-link-footer"
                    to="/"
                    className={`usa-footer__primary-link ${
                      location.pathname === '/' ? 'usa-current' : ''
                    }`}
                  >
                    Home
                  </NavLink>
                </li>
                <li
                  className="
                mobile-lg:grid-col-6
                desktop:grid-col-auto
                usa-footer__primary-content
              "
                >
                  <NavLink
                    id="login-link-footer"
                    to="/login"
                    className={`usa-footer__primary-link ${
                      location.pathname === '/login' ? 'usa-current' : ''
                    }`}
                  >
                    Login
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="mobile-lg:grid-col-4">
            <address className="usa-footer__address">
              <div className="grid-row grid-gap">
                <div
                  className="grid-col-auto mobile-lg:grid-col-12 desktop:grid-col-auto"
                >
                  <div className="usa-footer__contact-info">
                    <a href="tel:1-800-555-5555">(800) 555-VADR</a>
                  </div>
                </div>
                <div
                  className="grid-col-auto mobile-lg:grid-col-12 desktop:grid-col-auto"
                >
                  <div className="usa-footer__contact-info">
                    <a href="mailto:info@agency.gov">info@neworder.gov</a>
                  </div>
                </div>
              </div>
            </address>
          </div>
        </div>
      </div>
      <div className="usa-footer__secondary-section">
        <div className="grid-container">
          <div className="usa-footer__logo grid-row grid-gap-2">
            <div className="grid-col-auto">
              <img className="usa-footer__logo-img" src={logo} alt=""/>
            </div>
            <div className="grid-col-auto">
              <p className="usa-footer__logo-heading">Project Starkiller</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
