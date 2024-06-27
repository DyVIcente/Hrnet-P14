import { createSlice } from "@reduxjs/toolkit";
import { EmployeeListMockData } from "../data/EmployeeListMockData";

const initialState = {
  employees: EmployeeListMockData,
};

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      return {
        ...state,
        employees: [action.payload, ...state.employees],
      };
    },
  },
});

export const { addEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;
