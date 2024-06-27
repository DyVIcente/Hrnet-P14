import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./reducers/employees";

/**
 * Redux store configuration.
 *
 * @constant {Object} store - Configured Redux store.
 * @property {Object} reducer - Combined reducers for the store.
 * @property {Object} reducer.employee - Employee reducer module.
 */
const store = configureStore({
  reducer: {
    employee: employeeReducer,
  },
});

export default store;
