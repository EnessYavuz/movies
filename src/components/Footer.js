import React from "react";
import "../Footer.css";

function Footer() {
  return (
    <div className="body">
      <footer className="footer">
        <div className="footer__addr">
          <h1 className="footer__logo">Something</h1>

          <h2>Contact</h2>

          <address>
            5534 Somewhere In. The World 22193-10212,
            <br />
            <p className="footer__btn">Email Us</p>
          </address>
        </div>

        <ul className="footer__nav">
          <li className="nav__item">
            <h2 className="nav__title">Media</h2>

            <ul className="nav__ul">
              <li>
                <p href="#">Online</p>
              </li>

              <li>
                <p href="#">Print</p>
              </li>

              <li>
                <p href="#">Alternative Ads</p>
              </li>
            </ul>
          </li>

          <li className="nav__item nav__item--extra">
            <h2 className="nav__title">Technology</h2>

            <ul className="nav__ul nav__ul--extra">
              <li>
                <p>Hardware Design</p>
              </li>

              <li>
                <p>Software Design</p>
              </li>

              <li>
                <p>Digital Signage</p>
              </li>

              <li>
                <p>Automation</p>
              </li>

              <li>
                <p>Artificial Intelligence</p>
              </li>

              <li>
                <p>IoT</p>
              </li>
            </ul>
          </li>

          <li className="nav__item">
            <h2 className="nav__title">Legal</h2>

            <ul className="nav__ul">
              <li>
                <p>Privacy Policy</p>
              </li>

              <li>
                <p>Terms of Use</p>
              </li>

              <li>
                <p>Sitemap</p>
              </li>
            </ul>
          </li>
        </ul>

        <div className="legal">
          <p>&copy; 2019 Something. All rights reserved.</p>

          <div className="legal__links">
            <span>
              Made with <span className="heart">♥</span> remotely from Anywhere
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
