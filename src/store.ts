import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./logic/reducers";
import { thunk, ThunkMiddleware } from "redux-thunk";
import { createLogger } from "redux-logger";
import { UnknownAction } from "redux";
import { DashboardState } from "./logic/action/types";

type RootState = {
  dashboardReducer: DashboardState;
};

const loggerMiddleware = createLogger();
const middleware: (
  | ThunkMiddleware<RootState, UnknownAction, undefined>
  | typeof loggerMiddleware
)[] = [thunk];

if (process.env.NODE_ENV === "development") {
  middleware.push(loggerMiddleware);
}

const store = configureStore({
  reducer: { dashboardReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(middleware as any),
});

export default store;
