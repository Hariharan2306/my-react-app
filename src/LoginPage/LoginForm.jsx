import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import isEmpty from "lodash/isEmpty";
import { useNavigate } from "react-router-dom";
import { postUserLogin } from "../store/userLogin/thunk";
import { isLogin } from "../store/userLogin/selector";
const LoginForm = () => {
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
    <Box sx={{ margin: "50px" }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ color: "black", textAlign: "center" }}
      >
        Login
      </Typography>
      <form>
        <TextField
          id="username"
          label="Username"
          variant="outlined"
          margin="normal"
          fullWidth
          onChange={handleEmailChange}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
          onChange={handlePasswordChange}
        />
        <div>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            type="submit"
            onClick={handleSubmit}
          >
            Login
          </Button>
        </div>
      </form>
    </Box>
  );
};

export default LoginForm;
