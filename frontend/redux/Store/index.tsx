import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from '../Sagas';
import usersReducers from "../Reducers/Users/usersReducer";
import departmentReducer from "../Reducers/HumanResources/departmentReducer";
import employeeReducer from "../Reducers/HumanResources/employeeReducer";
import shiftReducer from "../Reducers/HumanResources/shiftReducer";
import jobroleReducer from "../Reducers/HumanResources/jobroleReducer";
import workorderReducer from "../Reducers/HumanResources/workorderReducer";
import masterReducers from "../Reducers/Masters/masterReducer";
import ContryReducer from "redux/Reducers/Masters/CountryReducer";
import ProvincesReducer from "redux/Reducers/Masters/ProvincesReducer";
import AddrReducer from "redux/Reducers/Masters/AddrReducer";
import policyReducer from "redux/Reducers/Masters/PolicyReducer";
import PritReducer from "redux/Reducers/Masters/PritReducer";
import cagroReducer from "redux/Reducers/Masters/CagroReducer";
import serviceTaskReducer from "redux/Reducers/Masters/serviceTaskReducer";

const saga = createSagaMiddleware()
const reducer = combineReducers({
  //Master Reducer nya dibawah Comman masing" module
  masterReducers: masterReducers,
  ContryReducer: ContryReducer,
  ProvincesReducer: ProvincesReducer,
  AddrReducer: AddrReducer,
  policyReducer: policyReducer,
  cagroReducer: cagroReducer,
  PritReducer: PritReducer,
  serviceTaskReducer: serviceTaskReducer,
  //Users
  usersReducers: usersReducers,

  //HR
  departmentReducer: departmentReducer,
  employeeReducer: employeeReducer,
  shiftReducer: shiftReducer,
  jobroleReducer: jobroleReducer,
  workorderReducer: workorderReducer,

  //Hotels

  //Booking

  //Resto

  //Payment

  //Purchase

});
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(saga),
});
saga.run(rootSaga)

export default store;
