import { useEffect, useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "./API/Login/selector";
import { isEmpty } from "lodash";
import { useNavigate } from "react-router-dom";
import { login } from "./API/Login/thunk";

const LoginPage = () => {
  const [emailId, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { loginResponce } = useSelector(loginSuccess);
  const navigate = useNavigate();
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  useEffect(() => {
    if (!isEmpty(loginResponce)) {
      navigate("/landing-page");
    }
  }, [loginResponce]);

  const handleSubmit = async () => {
    dispatch(login({ emailId, password }));
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        minWidth: "100vw",
        backgroundColor: "#fff",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ color: "black" }}
      >
        Login
      </Typography>
      <form onSubmit={handleSubmit} style={{ width: "30%" }}>
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          margin="normal"
          value={emailId}
          onChange={handleEmailChange}
        />
        <TextField
          fullWidth
          label="Password"
          variant="outlined"
          type="password"
          margin="normal"
          value={password}
          onChange={handlePasswordChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          size="large"
          sx={{ mt: 2 }}
        >
          Login
        </Button>
      </form>
    </Container>
  );
};

export default LoginPage;
