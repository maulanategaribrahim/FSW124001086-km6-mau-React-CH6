import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg  navbar-light fixed-top py-3">
      <div className="container-lg d-flex align-items-center py-2">
        <a className="navbar-brand" href="#">
          <img src="/images/logo.svg" alt="" />
        </a>
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#ourservice-section">
                Our Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#whyUs-section">
                Why Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#testimonial-section">
                Testimonial
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#faq-section">
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active btn register text-white">Register</a>
            </li>
          </ul>
        </div>
        <div className="offcanvas offcanvas-end d-lg-none" tabIndex={-1} id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel" style={{ width: "60%" }}>
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasResponsiveLabel">
              BCR
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close" />
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#ourservice-section">
                  Our Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#whyUs-section">
                  Why Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#testimonial-section">
                  Testimonial
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#faq-section">
                  FAQ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active btn register text-white">Register</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
