import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Login from "../../components/Login/Login";
import Registration from "../../components/Registration/Registration";
import "./GetIn.css";

function GetIn(props) {
  const [isMember, setIsMember] = useState(true);
  const [email, setEmail] = useState("");
  const [nickName, setNickName] = useState("");
  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  return (
    <div className="mt-5 c-form">
      <h2 className="display-5 mt-3">{isMember ? "Log In" : "Sign up"}</h2>
      <Form>
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
      </Form>
      <Button
        variant="warning"
        // onClick={isMember ? handleLogIn : handleSignUp}
        // disabled={isAuthLoading}
      >
        {isMember ? "Log In" : "Sign Up"}
        {/* {isAuthLoading && (
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
            )} */}
      </Button>
    </div>
  );
}

export default GetIn;
