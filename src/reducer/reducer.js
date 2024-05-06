export const initialState = {
  dataFilter: [],
  setDataFilter: () => {},
};

const carsReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA_CAR_FILTER":
      return {
        ...state,
        dataFilter: action.payload.dataFilter,
      };

    default:
      return console.log(`No case for type ${type} found in carsReducer.`);
  }
};

export default carsReducer;
