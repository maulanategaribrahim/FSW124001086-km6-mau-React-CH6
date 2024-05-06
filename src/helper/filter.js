import { dateConvert } from "./convertionDate";

export function filter(setDataFilter, driver, date, time, totalPassenger, cars) {
  //filter driver, Passenger, Date and Time

  if (driver !== "default" && date && time && totalPassenger !== 0) {
    // filter by date
    const dataByDate = cars.filter((car) => {
      const dataConvert = dateConvert(car.availableAt);

      if (dataConvert.convertDate === date) {
        return car;
      }
    });
    // filter by hour
    const dataByHrs = dataByDate.filter((car) => {
      const dataConvert = dateConvert(car.availableAt);
      if (dataConvert.convertTime === time) {
        return car;
      }
    });

    // filter by passenger
    const dataByPassenger = dataByHrs.filter((car) => car.capacity === totalPassenger);

    const dataFilter = dataByPassenger.filter((car) => {
      if (driver == "true") {
        return car.available == true;
      } else {
        return car.available == false;
      }
    });
    setDataFilter({
      type: "SET_DATA_CAR_FILTER",
      payload: {
        ...dataFilter,
        dataFilter: dataFilter,
      },
    });
  }

  //filter by driver and total passenger
  if (driver !== "default" && !date && !time && totalPassenger != 0) {
    if (driver == "true") {
      const dataDriver = cars.filter((x) => x.available == true);
      const dataFilter = dataDriver.filter((x) => x.capacity === totalPassenger);
      setDataFilter({
        type: "SET_DATA_CAR_FILTER",
        payload: {
          ...dataFilter,
          dataFilter: dataFilter,
        },
      });
    } else {
      const dataDriver = cars.filter((x) => x.available == false);
      const dataFilter = dataDriver.filter((x) => x.capacity === totalPassenger);
      setDataFilter({
        type: "SET_DATA_CAR_FILTER",
        payload: {
          ...dataFilter,
          dataFilter: dataFilter,
        },
      });
    }
  }
  //filter total Passenger only
  if ((!driver || driver === "default") && !date && !time && totalPassenger != 0) {
    const dataFilter = cars.filter((car) => car.capacity == totalPassenger);
    setDataFilter({
      type: "SET_DATA_CAR_FILTER",
      payload: {
        ...dataFilter,
        dataFilter: dataFilter,
      },
    });
  }

  //filter driver only
  if (driver !== "default" && !date && !time && totalPassenger === 0) {
    const dataFilter = cars.filter((car) => {
      if (driver == "true") {
        return car.available == true;
      } else {
        return car.available == false;
      }
    });
    setDataFilter({
      type: "SET_DATA_CAR_FILTER",
      payload: {
        ...dataFilter,
        dataFilter: dataFilter,
      },
    });
  }
}
