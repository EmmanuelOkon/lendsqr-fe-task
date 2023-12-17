export interface DashboardState {
  users: any;
  loading: boolean;
  error: null;
  dashboardMenu: string;
  userDetailNav: string;
  modalFilter: {
    org: string;
    username: string;
    email: string;
    phoneNumber: string;
    status: string;
  };
  filterModalToggle: boolean;
  globalFilter: string;
}

export interface RootState {
  dashboardReducer: DashboardState;
}

export const SET_DASHBOARD_MENU = "SET_DASHBOARD_MENU";
export const SET_USER_DETAIL_NAV = "SET_USER_DETAIL_NAV";
export const SET_MODAL_FILTER = "SET_MODAL_FILTER";
export const SET_FILTER_MODAL_TOGGLE = "SET_FILTER_MODAL_TOGGLE";
export const SET_GLOBAL_FILTER = "SET_GLOBAL_FILTER";

export const SET_FETCH_START = "SET_FETCH_START";
export const SET_FETCH_SUCCESS = "SET_FETCH_SUCCESS";
export const SET_FETCH_FAILURE = "SET_FETCH_FAILURE";
export const SET_USER_DATA = "SET_USER_DATA";
