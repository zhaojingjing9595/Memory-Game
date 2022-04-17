import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  LOGOUT_USER,
} from "./actions";

function reducer(state, action) {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "Please provide all values",
    };
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: "",
      alertText: "",
    };
  }
  if (action.type === SETUP_USER_BEGIN) {
    return {
      ...state,
      isAuthLoading: true,
    };
  }
  if (action.type === SETUP_USER_SUCCESS) {
    return {
      ...state,
      isAuthLoading: false,
      activeUser: true,
    };
  }
  if (action.type === SETUP_USER_ERROR) {
    return {
      ...state,
      isAuthLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: "wrong credentials",
    };
  }
  if (action.type === LOGOUT_USER) {
    return {
      ...state,
      activeUser: null,
    };
  }
}

export default reducer;
