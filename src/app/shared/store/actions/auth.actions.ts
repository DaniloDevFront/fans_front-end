import { createAction } from "@reduxjs/toolkit";

export const stepAuth = createAction("SET_STATE_AUTH", (action: string) => ({ payload: action }));
export const stepRegister = createAction("SET_STATE_REGISTER", (action: number) => ({ payload: action }));
