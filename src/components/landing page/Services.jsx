import React from "react";

function Services() {
  return (
    <section id="ourservice-section">
      <div className="container my-5">
        <div className="row d-flex justify-content-center align-items-center pt-5">
          <div className="col-md-5 px-lg-5">
            <img src="/images/img_service.svg" alt="img service" className="img-fluid" />
          </div>
          <div className="col-md-6 ps-lg-5 mt-4">
            <h2 className="ourservice-text-judul">Best Car Rental for any kind of trip in (Lokasimu)!</h2>
            <div className="ourservice-desc-container mt-3">
              <p className="pe-lg-5">
                Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
              </p>
              <ul>
                <li>Sewa Mobil Dengan Supir di Bali 12 Jam</li>
                <li>Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
                <li>Sewa Mobil Jangka Panjang Bulanan</li>
                <li>Gratis Antar - Jemput Mobil di Bandara</li>
                <li>Layanan Airport Transfer / Drop In Out</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
