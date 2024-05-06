import { createContext, useReducer } from "react";
import carsReducer, { initialState } from "../reducer/reducer";

export const Context = createContext(initialState);

function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(carsReducer, initialState);

  const ctxValue = {
    dataFilter: state.dataFilter,
    setDataFilter: dispatch,
  };

  return <Context.Provider value={ctxValue}>{children}</Context.Provider>;
}

export default ContextProvider;
