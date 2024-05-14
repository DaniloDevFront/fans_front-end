import { createReducer } from "@reduxjs/toolkit";
import { stepAuth, stepRegister } from "../actions/auth.actions";

export interface FormState {
  stepAuth: string;
  stepRegister: number;
}

const initialState: FormState = {
  stepAuth: "login",
  stepRegister: 0,
};

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(stepAuth, (state, action) => {
      state.stepAuth = action.payload;
    })
    .addCase(stepRegister, (state, action) => {
      state.stepRegister = action.payload;
    });
});

export default authReducer;
