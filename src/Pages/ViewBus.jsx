import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import isEmpty from "lodash/isEmpty";
import { Alert, Avatar, Card, Typography } from "@mui/material";
import { get } from "lodash";
import "../styles/scroll-box.css";
import { deepOrange } from "@mui/material/colors";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { randomNames } from "../config/constants";
import { Box } from "@mui/system";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ViewBus = () => {
  const { state } = useLocation();
  const [selectedData, setSelectedData] = useState({});
  const [selectedDriver, setSelectedDriver] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));

  useEffect(() => {
    if (!isEmpty(state) && !isEmpty(state.operatorName)) {
      setSelectedData(state);
    }
  }, []);
  const cardClick = (index) => {
    setSelectedDriver(index);
    setDialogOpen(true);
  };
  const onSubmit = () => {
    setDialogOpen(false);
    setToastOpen(true);
  };

  return (
    <div
      style={{
        height: "100vh",
        margin: "0 auto",
        width: "50%",
        paddingTop: "100px",
      }}
    >
      <Card
        sx={{
          //   width: "80%",
          height: "226px",
          display: " inline-grid",
          //   margin: "12px",
          margin: "16px auto",
          width: "95%",
          padding: "0px",
        }}
      >
        {toastOpen && (
          <Alert
            severity="success"
            sx={{ position: "absolute", width: "100%", zIndex: 10000 }}
            onClose={() => setToastOpen(false)}
          >
            {"Your Request has been accepted, will get back to you in a while"}
          </Alert>
        )}
        <img
          src={`data:image/jpeg;base64,${selectedData.base64Data}`}
          alt="Uploaded"
          style={{ width: "100%", height: "300px" }}
        />
      </Card>
      <div style={{ color: "black" }}>
        Operator Name : {selectedData.operatorName}
      </div>
      <div style={{ color: "black" }}>
        Number of Seats: {selectedData.noOfSeats}
      </div>
      <div style={{ color: "black" }}> Rating: {selectedData.rating}</div>
      <div
        className="scrollable-container"
        style={{ marginTop: "20px", height: "150px" }}
      >
        <div className="scrollable-content">
          {randomNames.map((e, index) => (
            // eslint-disable-next-line react/jsx-key
            <div
              className="item"
              onClick={() => cardClick(index)}
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: "140px",
                width: "65%",
              }}
            >
              <div style={{ width: "100px", margin: "30px" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Avatar
                    sx={{ bgcolor: deepOrange[500], width: 90, height: 70 }}
                    variant="square"
                  >
                    {get(e, "name", "").charAt(0)}
                  </Avatar>
                  <div style={{ marginLeft: "7px" }}>{get(e, "about", "")}</div>
                </div>
              </div>
            </div>
          ))}
          <BootstrapDialog
            onClose={() => setDialogOpen(false)}
            aria-labelledby="customized-dialog-title"
            open={dialogOpen}
          >
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
              Driver Details
            </DialogTitle>
            <IconButton
              aria-label="close"
              onClick={() => setDialogOpen(false)}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
            <DialogContent dividers>
              <Box sx={{ m: "2% 0 5% 25%" }}>
                <span style={{ marginRight: "55px" }}>
                  Name - {randomNames[selectedDriver].name}
                </span>
                <span>Age - {randomNames[selectedDriver].age}</span>
                <br />
                <span style={{ marginRight: "55px" }}>
                  Sex - {randomNames[selectedDriver].sex}
                </span>
                <span>
                  experience - {randomNames[selectedDriver].experience}
                </span>
                <br />
                <span style={{ marginLeft: "45px" }}>
                  starRating - {randomNames[selectedDriver].starRating}
                </span>
              </Box>
              <Typography gutterBottom>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                cursus magna, vel scelerisque nisl consectetur et. Donec sed
                odio dui. Donec ullamcorper nulla non metus auctor fringilla.
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={() => onSubmit()}>
                Submit Request
              </Button>
            </DialogActions>
          </BootstrapDialog>
        </div>
      </div>
    </div>
  );
};
export default ViewBus;
