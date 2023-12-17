import { DashboardState } from "../action/types";
import {
  SET_FILTER_MODAL_TOGGLE,
  SET_DASHBOARD_MENU,
  SET_FETCH_FAILURE,
  SET_FETCH_START,
  SET_FETCH_SUCCESS,
  SET_GLOBAL_FILTER,
  SET_MODAL_FILTER,
  SET_USER_DETAIL_NAV,
} from "../action/types";

// Define the initial state
const initialState: DashboardState = {
  users: [],
  loading: true,
  error: null,
  dashboardMenu: "Users",
  userDetailNav: "General Details",
  modalFilter: {
    org: "",
    username: "",
    email: "",
    phoneNumber: "",
    status: "",
  },
  filterModalToggle: false,
  globalFilter: "",
};

// Define the reducer function
const dashboardReducer = (
  state = initialState,
  action: any
): DashboardState => {
  switch (action.type) {
    case SET_FETCH_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SET_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case SET_FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SET_DASHBOARD_MENU:
      return {
        ...state,
        dashboardMenu: action.payload,
      };
    case SET_USER_DETAIL_NAV:
      return {
        ...state,
        userDetailNav: action.payload,
      };
    case SET_MODAL_FILTER:
      return {
        ...state,
        modalFilter: action.payload,
      };
    case SET_FILTER_MODAL_TOGGLE:
      return {
        ...state,
        filterModalToggle: action.payload,
      };
    case SET_GLOBAL_FILTER:
      return {
        ...state,
        globalFilter: action.payload,
      };
    default:
      return state;
  }
};

export default dashboardReducer;
