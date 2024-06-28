import "./NavBar.scss";
import logo from "@/assets/logo.svg";
import logoMobile from "@/assets/logo-mobile.svg";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar__wrapper">
      <div className="navbar__left">
        <img src={logo} className="navbar__logo" />
        <img src={logoMobile} className="navbar__logo--mobile" />
      </div>
      <div className="navbar__right">
        <div className="navbar__container">
          <a className="navbar__link navbar__link--locale">fr</a>
          <div className="navbar__onboarding">
            <a className="navbar__link navbar__link--register">register</a>
            <span className="navbar__text navbar__text--con">or</span>
            <a className="navbar__link navbar__link--signin">sign in</a>
          </div>
        </div>
        <button className="navbar__button">Post ad</button>
      </div>
    </div>
    </nav>
  );
};
