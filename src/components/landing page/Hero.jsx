import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section id="main-section ">
      <div className="container-fluid pt-5 gx-0 container mt-5 pt-5">
        <div className="row align-items-center pt-lg-5 gx-0">
          <div className="col-lg-6 d-flex flex-column justify-content-start pt-4 pt-lg-0 pb-lg-5 ps-lg-5">
            <div className="main-text ps-lg-5">
              <h1 className="main-text-judul">Sewa &amp; Rental Mobil Terbaik di kawasan Semarang</h1>
              <p className="col-10 pe-lg-5">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
              <Link to={"/cars"} className="btn main-btn text-white">
                Mulai Sewa Mobil
              </Link>
            </div>
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-end align-self-end main-img">
            <div className="main-img-container">
              <div className="main-bg-img" />
              <img src="/images/mobil.png" alt="Gambar Mobil" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
