import { ButtonBase, Card, Typography } from "@mui/material";
import logo from "../assets/img5.jpg";
import driver from "../assets/drivers1.png";
import bus from "../assets/bus.jpg";
import machanics from "../assets/machanics.jpg";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router";

const useStyles = makeStyles(() => ({
  imageSize: { width: "100%", height: "546px", WebkitFilter: "blur(2px)" },
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
  const handleIsDriveList = () => {};
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
        <img src={logo} alt="imag5" className={classes.imageSize} />
        <div
          style={{
            backgroundColor: "rgba(0,0,0, 0.4)",
            color: "white",
            fontWeight: "bold",
            border: "3px solid #f1f1f1",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2,
            width: "80%",
            padding: "20px",
            textAlign: "center",
            display: "flex",
            justifyContent: "space-around",
            height: "150px",
          }}
        >
          <div className={classes.imgWrapper}>
            <ButtonBase onClick={handleIsDriveList}>
              <Card>
                <img src={driver} alt="img" className={classes.imgWrapper} />
                <Typography
                  sx={{
                    position: "absolute",
                    left: "15%",
                    fontSize: "22px",
                    fontWeight: "900",
                    color: "white",
                  }}
                >
                  Drivers
                </Typography>
              </Card>
            </ButtonBase>
          </div>
          <div className={classes.imgWrapper}>
            <ButtonBase onClick={handleVehicleList}>
              <Card className={classes.imgWrapper}>
                <img src={bus} alt="img" className={classes.imgWrapper} />
                <Typography
                  sx={{
                    position: "absolute",
                    left: "0",
                    right: "0",
                    fontSize: "22px",
                    fontWeight: "900",
                    color: "white",
                  }}
                >
                  Vehicle
                </Typography>
              </Card>
            </ButtonBase>
          </div>
          <div className={classes.imgWrapper}>
            <ButtonBase onClick={handleIsMachanicsList}>
              <Card className={classes.imgWrapper}>
                <img src={machanics} alt="img" className={classes.imgWrapper} />
                <Typography
                  sx={{
                    position: "absolute",
                    right: "13%",
                    fontSize: "22px",
                    fontWeight: "900",
                    color: "white",
                  }}
                >
                  Mechanics
                </Typography>
              </Card>
            </ButtonBase>
          </div>
        </div>
      </Card>
    </>
  );
}

export default NewLandingPage;
