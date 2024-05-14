import { RootState } from "../reducers";

export const selectStepAuth = (state: RootState) => state.auth.stepAuth;
export const selectStepRegister = (state: RootState) => state.auth.stepRegister;
