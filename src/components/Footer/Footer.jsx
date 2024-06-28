import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__section-div">
        <div className="footer-flex">
          <div className="footer-section">
            <h2 className="footer-section__header">kijiji</h2>
            <h3 className="footer__label">About</h3>
            <h3 className="footer__label">Join Us</h3>
            <h3 className="footer__label">Member Benefits</h3>
            <h3 className="footer__label">Advertise on Kijiji</h3>
          </div>
          <div className="footer-section">
            <h2 className="footer-section__header">explore</h2>
            <h3 className="footer__label">Kijiji Autos</h3>
            <h3 className="footer__label">Kijiji Central</h3>
            <h3 className="footer__label">Tools to promote ads</h3>
          </div>
        </div>
        <div className="footer-flex">
          <div className="footer-section">
            <h2 className="footer-section__header">info</h2>
            <h3 className="footer__label">Terms of Use</h3>
            <h3 className="footer__label">Privacy Policy</h3>
            <h3 className="footer__label">Posting Policy</h3>
            <h3 className="footer__label">AdChoices</h3>
          </div>
          <div className="footer-section">
            <h2 className="footer-section__header">support</h2>
            <h3 className="footer__label">Help Desk</h3>
            <h3 className="footer__label">Kijiji en Français</h3>
            <h3 className="footer__label">Accessibility</h3>
          </div>
        </div>
      </div>
      <div className="footer-links">
        <div className="footer-downloads">
          <button>APP STORE</button>
          <button>GOOGLE STORE</button>
        </div>
        <div className="footer-socials">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
        </div>
      </div>
      <div className="footer-copyright">
        <p>
          All rights reserved. Google Play. YouTube and other marks are
          trademarks of Google Inc.
        </p>
      </div>
    </div>
  );
}
