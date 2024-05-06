import React from "react";

function Testimonial() {
  return (
    <section id="testimonial-section">
      <div className="container testi my-5 py-3 pb-lg-5">
        <div className="testi-judul text-center">
          <h2>Testimonial</h2>
          <p>Berbagai review positif dari para pelanggan kami</p>
        </div>
        <div className=" col-lg-8 offset-lg-2 p-lg-2 rounded-4">
          <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
            <div className="testi-content carousel-inner">
              <div className="carousel-item active">
                <div className="row d-flex align align-items-center justify-content-center p-md-5 p-sm-5">
                  <div className="col-md-2 profile">
                    <div className="img-profile mt-4">
                      <img src="/images/img_photo.svg" alt="" />
                    </div>
                  </div>
                  <div className="col-md-10">
                    <div className="testi-rate mt-4">
                      <img src="/images/Rate.svg" alt="" />
                    </div>
                    <div className="testi-text mt-4">
                      <p>
                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod”
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row d-flex align align-items-center justify-content-center p-md-5 p-sm-5">
                  <div className="col-md-2 profile">
                    <div className="img-profile mt-4">
                      <img src="/images/img_service.svg" alt="" style={{ width: 77 }} />
                    </div>
                  </div>
                  <div className="col-md-10">
                    <div className="testi-rate mt-4">
                      <img src="/images/Rate.svg" alt="" />
                    </div>
                    <div className="testi-text mt-4">
                      <p>
                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod”
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center btn-carousel">
              <button className="carousel-control mt-4 mt-4" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <img src="/images/Left button.svg" className="img" alt="" />
              </button>
              <button className="carousel-control" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <img src="/images/Right button.svg" className="img" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
