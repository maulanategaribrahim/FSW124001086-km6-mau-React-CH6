import React from "react";
import { Link } from "react-router-dom";

function GetStarted() {
  return (
    <section id="getstarted">
      <div className="container my-5 pt-4 pt-lg-5">
        <div className="getstarted-container d-flex align-items-center justify-content-center text-center">
          <div className="row text-white">
            <div className="col-md-12 gs-text-judul my-2">
              <h2>Sewa Mobil di (Lokasimu) Sekarang</h2>
            </div>
            <div className="col-lg-6 col-sm-12 offset-lg-3 my-2">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="col-md-12 my-4">
               <Link to={"/cars"} className="btn main-btn text-white">
                Mulai Sewa Mobil
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetStarted;
