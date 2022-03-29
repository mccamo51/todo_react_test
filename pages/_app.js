import "antd/dist/antd.css";
import { useReducer } from "react";
import DispatchContext from "../store/DispatchContext";
import { initialState, reducer } from "../store/reducer";
import StateContext from "../store/StateContext";
// import "./index.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={{dispatch}}>
        <Component {...pageProps} />
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default MyApp;
