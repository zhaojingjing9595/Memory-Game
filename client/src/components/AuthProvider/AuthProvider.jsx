import React, { useReducer } from "react";
import AuthContext from "../../context/AuthContext.js";
import { login, signUp } from "../../services/api.js";
import reducer from "../../reducer/reducer.js";
import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  LOGOUT_USER,
} from "../../reducer/actions.js";

const localStorageUser = localStorage.getItem("user");

const initialState = {
  isAuthLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  activeUser: localStorageUser ? JSON.parse(localStorageUser) : null,
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

  async function handleSignUp(nickName, email, pwd, confirmPwd) {
    dispatch({ type: SETUP_USER_BEGIN });
    try {
      const user = await signUp(nickName, email, pwd, confirmPwd);
      dispatch({ type: SETUP_USER_SUCCESS, payload: { user } });
      addUserToLocalStorage(user);
    } catch (error) {
      dispatch({ type: SETUP_USER_ERROR });
    }
    clearAlert();
  }

  async function handleLogIn(email, password) {
    dispatch({ type: SETUP_USER_BEGIN });
    try {
      const user = await login(email, password);
      console.log(user);
      dispatch({ type: SETUP_USER_SUCCESS, payload: { user } });
      addUserToLocalStorage(user);
    } catch (error) {
      dispatch({ type: SETUP_USER_ERROR });
    }
    clearAlert();
  }

  async function handleLogOut() {
    dispatch({ type: LOGOUT_USER });
    removeUserFromLocalStorage();
  }

  function addUserToLocalStorage(user) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  function removeUserFromLocalStorage() {
    localStorage.removeItem("user");
  }
  return (
    <div>
      <AuthContext.Provider
        value={{
          ...state,
          displayAlert,
          onSignUp: handleSignUp,
          onLogIn: handleLogIn,
          onLogOut: handleLogOut,
        }}
      >
        {children}
      </AuthContext.Provider>
    </div>
  );
}

export default AuthProvider;
