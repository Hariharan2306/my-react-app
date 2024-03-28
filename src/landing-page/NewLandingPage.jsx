import { Button, ButtonBase, Card, Divider, Typography } from "@mui/material";
import homePageImage from "../assets/homePageImage.png";
import driver from "../assets/drivers1.png";
import bus from "../assets/bus.jpg";
import machanics from "../assets/machanics.jpg";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router";
import AutoMovingImages from "./AutoMovingImages";

const useStyles = makeStyles(() => ({
  imageSize: { width: "100%", height: "590px" },
  imgWrapper: {
    width: "120px",
    height: "117px",
    borderRadius: "106px",
    cursor: "pointer",
    "& .MuiCard-root": {
      borderRadius: "60px",
    },
  },
}));
function NewLandingPage(props) {
  const navigate = useNavigate();
  const handleIsDriveList = () => {
    navigate("/drivers");
  };
  const handleIsMachanicsList = () => {
    navigate("/mechanics");
  };
  const handleVehicleList = () => {
    navigate("/landing-page");
  };
  const classes = useStyles();
  return (
    <>
      <Card>
        <img src={homePageImage} alt="imag5" className={classes.imageSize} />
        <div
          style={{
            backgroundColor: "rgba(0,0,0, 0.4)",
            color: "white",
            fontWeight: "bold",
            // border: "3px solid #f1f1f1",
            position: "relative",
            // top: "30%",
            top: "-241px",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2,
            width: "38%",
            padding: "20px",
            textAlign: "center",

            height: "151px",
          }}
        >
          <h1>Travel,Explore,Hiring...</h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "35px",
          }}
        >
          <Card
            sx={{ width: "310px", height: "400px" }}
            className={classes.imgWrapper}
          >
            <ButtonBase
              sx={{ margin: "26px 92px 0 92px" }}
              onClick={handleIsDriveList}
            >
              <Card>
                <img
                  src="https://www.pngitem.com/pimgs/m/24-243048_png-file-svg-driver-icon-vector-png-transparent.png"
                  alt="img"
                  className={classes.imgWrapper}
                />
              </Card>
            </ButtonBase>
            <Typography
              sx={{
                fontSize: "22px",
                fontWeight: "900",
                color: "black",
                textAlign: "center",
                marginTop: "10px",
              }}
            >
              Drivers
            </Typography>
            <p style={{ margin: "32px" }}>
              Find our professional drivers and choose yours based on star
              ratings.
            </p>
          </Card>
          <Card
            sx={{ width: "310px", height: "400px" }}
            className={classes.imgWrapper}
          >
            <ButtonBase
              sx={{ margin: "26px 92px 0 92px" }}
              onClick={handleVehicleList}
            >
              <Card className={classes.imgWrapper}>
                <img
                  onClick={navigate("/landing-page")}
                  src="https://img.freepik.com/premium-vector/minimal-abstract-logo-bus-icon-school-bus-vector-silhouette-isolated-design-template_653669-2867.jpg"
                  alt="img"
                  className={classes.imgWrapper}
                />
              </Card>
            </ButtonBase>
            <Typography
              sx={{
                fontSize: "22px",
                fontWeight: "900",
                color: "black",
                textAlign: "center",
                marginTop: "10px",
              }}
            >
              Vehicle
            </Typography>
            <p style={{ margin: "32px" }}>
              Find our professional drivers and choose yours based on star
              ratings.
            </p>
          </Card>
          <Card
            sx={{ width: "310px", height: "400px" }}
            className={classes.imgWrapper}
          >
            <ButtonBase
              sx={{ margin: "26px 92px 0 92px" }}
              onClick={handleIsMachanicsList}
            >
              <Card className={classes.imgWrapper}>
                <img
                  src="https://www.autoserviceworld.com/wp-content/uploads/2019/09/mechanic-icon-mechanic-on-duty-vector-20322896.jpg"
                  alt="img"
                  className={classes.imgWrapper}
                  style={{ width: "121px", height: "128px" }}
                />
              </Card>
            </ButtonBase>
            <Typography
              sx={{
                fontSize: "22px",
                fontWeight: "900",
                color: "black",
                textAlign: "center",
                marginTop: "10px",
              }}
            >
              Mechanics
            </Typography>
            <p style={{ margin: "32px" }}>
              Find our professional drivers and choose yours based on star
              ratings.
            </p>
          </Card>
        </div>
        <Divider sx={{ margin: "40px 40px 40px 40px", width: "94%" }} />
        <AutoMovingImages />
      </Card>
    </>
  );
}

export default NewLandingPage;
