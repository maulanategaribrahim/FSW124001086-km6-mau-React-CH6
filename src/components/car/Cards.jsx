import React from "react";

const Cards = ({ car }) => {
  return (
    <div className="col-lg-4 col-md-6 mb-3">
      <div className="card  px-2 py-4 align-items-center">
        <img src={car.image} className="card-img-top mt-4 img-fluid" />
        <div className="card-body col-12">
          <h5 className="card-title fs-6">
            {car.type} / {car.model}
          </h5>
          <h5 className="card-title fs-5 fw-bold">{car.rentPerDay}/ hari</h5>
          <p className="cars__p">{car.description}</p>
          <div className="row">
            <div className="col-1">
              <img src="/images/fi_users1.png" width="20px" alt="" />
            </div>
            <div className="col-10 ms-lg-2">{car.capacity} orang</div>
          </div>
          <div className="row mt-2">
            <div className="col-1">
              <img src="/images/fi_settings.png" width="20px" alt="" />
            </div>
            <div className="col-10 ms-lg-2">{car.transmission}</div>
          </div>
          <div className="row mt-2 mb-4">
            <div className="col-1">
              <img src="/images/fi_calendar.png" width="20px" alt="" />
            </div>
            <div className="col-10 ms-lg-2">Tahun {car.year}</div>
          </div>

          <a href="#" className="btn btn-search text-white" style={{ width: "100%" }}>
            Pilih Mobil
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
