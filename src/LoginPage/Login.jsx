import React, { useState, useEffect } from "react";
import "./logiStyle.css";
import { useDispatch, useSelector } from "react-redux";
import isEmpty from "lodash/isEmpty";
import { useNavigate } from "react-router-dom";
import { postUserLogin } from "../store/userLogin/thunk";
import { isLogin } from "../store/userLogin/selector";
function Login() {
  const [emailId, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const loginResponce = useSelector(isLogin);
  const navigate = useNavigate();
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  useEffect(() => {
    if (!isEmpty(loginResponce) && loginResponce === "Successfully logedin") {
      navigate("/new-landing-page");
    }
  }, [loginResponce]);
  console.log(loginResponce);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postUserLogin({ emailId, password }));
  };

  return (
    <div className="loginContainer">
      <div className="left">
        <div className="login-section">
          <header>
            <h2 className="animation a1" style={{ color: "black" }}>
              Bus Buddies
            </h2>
            {/* <h4 className="animation a2" style={{ color: "black" }}>
              Welcome back, Please login to your account
            </h4> */}
          </header>
          <form onSubmit={handleSubmit}>
            <input
              type="emailId"
              placeholder="Email"
              className="input-field animation a3"
              value={emailId}
              onChange={handleEmailChange}
            />
            <input
              type="password"
              placeholder="Password"
              className="input-field animation a4"
              value={password}
              onChange={handlePasswordChange}
            />
            <p className="animation a5">
              <a href="#" style={{ color: "black" }}>
                Forgot password?
              </a>
            </p>
            <button type="submit" className="animation a6">
              Sign in
            </button>
          </form>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
}

export default Login;
