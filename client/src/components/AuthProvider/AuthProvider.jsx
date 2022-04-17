import React, { useReducer } from "react";
import AuthContext from "../../context/AuthContext.js";
import reducer from "../../reducer/reducer.js";
import { DISPLAY_ALERT, CLEAR_ALERT } from "../../reducer/actions.js";

const initialState = {
  isAuthLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  activeUser: false,
};

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  function displayAlert() {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  }
  function clearAlert() {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  }

  function addUserToLocalStorage(user) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  function removeUserFromLocalStorage() {
    localStorage.removeItem("user");
  }
  return (
    <div>
      <AuthContext.Provider value={{ ...state, displayAlert }}>
        {children}
      </AuthContext.Provider>
    </div>
  );
}

export default AuthProvider;
