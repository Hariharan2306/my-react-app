import { Card, Grid, Typography } from "@mui/material";
import LoginForm from "./LoginForm";
import { Container } from "@mui/system";

import ImageSlider from "./ImageSlider";

const Login = () => {
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
      <Card>
        <Grid container sx={{ margin: "0 auto", width: "auto" }}>
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "56vh",
            }}
          >
            <Grid item xs={5}>
              <ImageSlider />
              <div
                style={{
                  backgroundImage: "url(path/to/advising-img.jpg)",
                  // height: "100vh",
                  backgroundSize: "cover",
                }}
              />
            </Grid>
            <Typography marginLeft={10} marginTop={10}>
              <LoginForm />
            </Typography>
          </div>
        </Grid>
      </Card>
    </Container>
  );
};

export default Login;
