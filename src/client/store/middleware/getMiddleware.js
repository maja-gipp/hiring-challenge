import {getDefaultMiddleware} from "@reduxjs/toolkit";
import {routerMiddleware} from "connected-react-router";
import api from "./api";

const defaultMiddleware = getDefaultMiddleware({
  /*
    Redux Toolkit default middleware:
      - configures redux-thunk out-the-box
      - immutableCheck switched off until we need it (slower)
      - serializableCheck switched off until we need it (requires
         customisation to work with seamless-immutable)
   */
  //immutableCheck: false,
  //serializableCheck: false,
});

const getMiddleware = (history) => [
  ...defaultMiddleware,
  ...(history ? [routerMiddleware(history)] : []),
  api
];

export default getMiddleware;
