import React from "react";
import { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import Login from "../../components/Login/Login";
import Registration from "../../components/Registration/Registration";
import useAuth from "../../hooks/useAuth";
import Alert from "../../components/Alerts/Alert";
import "./GetIn.css";
import { useNavigate } from "react-router-dom";

function GetIn() {
  const [isMember, setIsMember] = useState(true);
  const [email, setEmail] = useState("");
  const [nickName, setNickName] = useState("");
  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const {
    onSignUp,
    onLogIn,
    isAuthLoading,
    showAlert,
    displayAlert,
  } = useAuth();
  const navigate = useNavigate();
  async function handleLogIn(e) {
    e.preventDefault();
    if (!email || !pwd) {
      displayAlert();
      return;
    } else {
      console.log("login");
      const currentUser = { email, pwd };
      await onLogIn(currentUser);
      navigate("/");
      setEmail("");
      setPwd("");
    }
  }

  async function handleSignUp(e) {
    e.preventDefault();
    if (!nickName || !email || !pwd || !confirmPwd) {
      displayAlert();
      return;
    } else {
      console.log("signup");
      const currentUser = { nickName, email, pwd, confirmPwd };
      await onSignUp(currentUser);
      navigate("/");
      setNickName("");
      setEmail("");
      setPwd("");
      confirmPwd("");
    }
  }

  return (
    <div className="mt-5 c-form">
      <h2 className="display-5 mt-3">{isMember ? "Log In" : "Sign up"}</h2>
      {showAlert && <Alert />}
      <Form onSubmit={isMember ? handleLogIn : handleSignUp}>
        {isMember ? (
          <Login
            email={email}
            setEmail={(e) => setEmail(e.target.value)}
            pwd={pwd}
            setPwd={(e) => setPwd(e.target.value)}
            setIsMember={() => setIsMember(false)}
          />
        ) : (
          <Registration
            email={email}
            setEmail={(e) => setEmail(e.target.value)}
            pwd={pwd}
            setPwd={(e) => setPwd(e.target.value)}
            nickName={nickName}
            setNickName={(e) => setNickName(e.target.value)}
            confirmPwd={confirmPwd}
            setConfirmPwd={(e) => setConfirmPwd(e.target.value)}
            setIsMember={() => setIsMember(true)}
          />
        )}
        <Button variant="warning" type="submit" disabled={isAuthLoading}>
          {isMember ? "Log In" : "Sign Up"}
          {isAuthLoading && (
            <>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              <span className="visually-hidden">Loading...</span>
            </>
          )}
        </Button>
      </Form>
    </div>
  );
}

export default GetIn;
