import { useContext, useEffect, useState } from "react";
import { filter } from "../helper/filter";
import { Context } from "../context/Context";

import Cards from "../components/car/Cards";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CarHero from "../components/car/CarHero";

const Cars = () => {
  const [cars, setCars] = useState();
  const [data, setData] = useState({
    driver: null,
    date: "",
    time: "",
    totalPassenger: 0,
  });
  const { dataFilter, setDataFilter } = useContext(Context);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function get() {
      try {
        setIsLoading(true);
        setError("");
        const response = await fetch("https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json");
        if (!response.ok) {
          throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }
        const data = await response.json();
        setCars(data);
        setDataFilter({
          type: "SET_DATA_CAR_FILTER",
          payload: {
            ...dataFilter,
            dataFilter: data,
          },
        });
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setError("Failed to fetch data. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }
    get();
  }, [setDataFilter]);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    filter(setDataFilter, data.driver, data.date, data.time, Number(data.totalPassenger), cars);
  };

  return (
    <>
      <Navbar />
      <CarHero />
      <section id="search">
        <div className="col-10 container search-container mb-5 ">
          <div className="row">
            <div className="col-lg-12 col-12">
              <div className="row search-card mx-lg-5 py-4">
                <div className="col-md-auto col-lg-auto col-xl-auto col-xxl-3 ">
                  <label>Tipe Driver</label>
                  <select name="driver" onChange={handleChange} className="form-select" aria-label="Default select example" id="tipeDriver">
                    <option value="default">Pilih Tipe Driver &nbsp; &nbsp; &nbsp; &nbsp;</option>
                    <option value={true}>Dengan Supir</option>
                    <option value={false}>Tanpa Supir (Lepas Kunci)</option>
                  </select>
                </div>
                <div className="col-md-auto col-lg-auto col-xl-3 ">
                  <label>Tanggal</label>
                  <input name="date" onChange={handleChange} type="date" className="form-control" placeholder="Pilih Tanggal" id="tanggal" />
                </div>
                <div className="col-md-auto col-lg-auto col-xl-2  search-time">
                  <label>Pilih Waktu</label>
                  <select disabled={!data.date} name="time" onChange={handleChange} className="form-select" aria-label="Default select example" id="waktuJemput">
                    <option defaultValue={null} value="false">
                      Pilih Waktu &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    </option>
                    <option value="08:00">08.00 WIB</option>
                    <option value="09:00">09.00 WIB</option>
                    <option value="10:00">10.00 WIB</option>
                    <option value="11:00">11.00 WIB</option>
                    <option value="12:00">12.00 WIB</option>
                    <option value="15:49">15.49 WIB</option>
                  </select>
                </div>
                <div className="col-md-auto col-lg-auto col-xl-auto ">
                  <label className="fw-light">Jumlah Penumpang (optional)</label>
                  <div className="input-group">
                    <input name="totalPassenger" min={0} onChange={handleChange} type="number" className="form-control border-end-0" placeholder="Jumlah Penumpang" id="totalPassenger" defaultValue={0} />
                    <span className="input-group-text bg-white">
                      <img src="/images/fi_users.png" width="20px" alt="" />
                    </span>
                  </div>
                </div>
                <div className="col-md-2 col-lg-2 col-xl-auto  pt-4">
                  <button onClick={handleSubmit} className="btn btn-search text-white" id="load-btn">
                    Cari Mobil
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cars">
        <div className="col-10 container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="row" id="cars-container">
                {isLoading && <h2 className="text-center mt-3">Loading...</h2>}
                {!isLoading && !error && dataFilter?.length === 0 ? <h4 className="text-center alert alert-danger mt-4">No Matching Cars Found</h4> : dataFilter?.map((car, i) => <Cards key={i} car={car} />)}
                {error && <div className="alert alert-danger mt-4">{error}</div>}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Cars;
