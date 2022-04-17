import React, { useReducer } from "react";
import AuthContext from "../../context/AuthContext.js";
import reducer from "../../reducer/reducer.js";

const initialState = {
  isAuthLoading: false,
  showAlert: false,
  showModal: false,
  alertText: "",
  alertType: "",
  activeUser: null,
};

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

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <AuthContext.Provider value={{ ...state }}>
        {children}
      </AuthContext.Provider>
    </div>
  );
}

export default AuthProvider;
