import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer id="footer">
      <div className="container my-5 pt-3 py-lg-5">
        <div className="row d-flex justify-content-between">
          <div className="col-md-3">
            <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
          </div>
          <div className="col-md-2 footer-nav">
            <ul className="list-unstyled">
              <li>
                <a className="text-decoration-none text-black" href="#ourservice-section">
                  Our Services
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-black" href="#whyUs-section">
                  Why Us
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-black" href="#testimonial-section">
                  Testimonial
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-black" href="#faq-section">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-auto">
            <p>Connect with us</p>
            <ul className="list-inline d-flex">
              <li className="list-inline-item">
                <img src="/images/icon_facebook.svg" alt="" />
              </li>
              <li className="list-inline-item">
                <img src="/images/icon_instagram.svg" alt="" />
              </li>
              <li className="list-inline-item">
                <img src="/images/icon_twitter.svg" alt="" />
              </li>
              <li className="list-inline-item">
                <img src="/images/icon_mail.svg" alt="" />
              </li>
              <li className="list-inline-item">
                <img src="/images/icon_twitch.svg" alt="" />
              </li>
            </ul>
          </div>
          <div className="col-md-auto">
            <p>Copyright Binar 2022</p>
            
          <a href="#" className=" main-btn text-white">
            <img src="/images/logo.svg" alt="Logo" />
          </a>

          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
