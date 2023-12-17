import {
  SET_FILTER_MODAL_TOGGLE,
  SET_DASHBOARD_MENU,
  SET_FETCH_FAILURE,
  SET_FETCH_START,
  SET_FETCH_SUCCESS,
  SET_GLOBAL_FILTER,
  SET_MODAL_FILTER,
  SET_USER_DETAIL_NAV,
} from "./types";

// Action to set the dashboard menu state
export const setDashboardMenu = (menu: any) => ({
  type: SET_DASHBOARD_MENU,
  payload: menu,
});

// Action to set the user detail nav state
export const setUserDetailNav = (nav: any) => ({
  type: SET_USER_DETAIL_NAV,
  payload: nav,
});

// Action to set the modal filter state
export const setModalFilter = (filter: any) => ({
  type: SET_MODAL_FILTER,
  payload: filter,
});

// Action to set the filter modal toggle state
export const setFilterModalToggle = (toggle: any) => ({
  type: SET_FILTER_MODAL_TOGGLE,
  payload: toggle,
});

// Action to set the global filter state
export const setGlobalFilter = (filter: any) => ({
  type: SET_GLOBAL_FILTER,
  payload: filter,
});

export const setFetchStart = () => ({
  type: SET_FETCH_START,
});

export const setFetchSuccess = (data: any) => ({
  type: SET_FETCH_SUCCESS,
  payload: data,
});

export const setFetchFailure = (error: any) => ({
  type: SET_FETCH_FAILURE,
  payload: error,
});

export const fetchUserData = () => {
  return (dispatch: any) => {
    dispatch(setFetchStart());

    return fetch(
      `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          dispatch(setFetchSuccess(data));
        }
      })
      .catch((error) => {
        dispatch(setFetchFailure(error.message));
        // console.log(error.message);
      });
  };
};
