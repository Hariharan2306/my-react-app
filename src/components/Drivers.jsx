import * as React from "react";
import "../styles/scroll-box.css";
import { Paper, TextField } from "@mui/material";
import { get } from "lodash";
import { Button } from "@mui/base";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { getAllDrivers, onBoardDriverThunk } from "../API/Drivers/thunk";
import { useDispatch, useSelector } from "react-redux";
import { allDriversSelector } from "../API/Drivers/selector";
import { randomNames } from "../config/constants";

export default function Drivers() {
  const [dataView, setDataView] = React.useState(0);
  const dispatch = useDispatch();
  const allDrivers = useSelector(allDriversSelector);

  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [busBuddyId, setBusBuddyId] = React.useState(null);
  const initialState = {
    busBuddyId: "",
    busId: "",
    travelDate: "",
    boardingPoint: "",
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_BUS_BUDDY_ID":
        return { ...state, busBuddyId: action.payload };
      case "SET_BUS_ID":
        return { ...state, busId: action.payload };
      case "SET_TRAVEL_DATE":
        return { ...state, travelDate: action.payload };
      case "SET_BOARDING_POINT":
        return { ...state, boardingPoint: action.payload };
      default:
        return state;
    }
  };
  const [state, dispatchReducer] = React.useReducer(reducer, initialState);

  const [date, setDate] = React.useState("");

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));

  React.useEffect(() => {
    dispatch(getAllDrivers());
  }, [dataView]);
  const onBoardDriver = () => {
    const data = {
      busBuddyId: state.busBuddyId,
      travelDate: state.travelDate,
      busId: state.busId,
      boardingPoint: state.boardingPoint,
    };
    dispatch(onBoardDriverThunk(data));
    setDialogOpen(false);
  };

  return (
    <div style={{ margin: "20px", padding: "70px 20px 20px", height: "100vh" }}>
      <div className="scrollable-container">
        <div className="scrollable-content">
          {randomNames.map((e, index) => (
            // eslint-disable-next-line react/jsx-key
            <div className="item" onClick={() => setDataView(index)}>
              Image - {get(e, "name", "")}
            </div>
          ))}
        </div>
      </div>
      <div className="driverDetails">
        <img className="driverImage" src={randomNames[dataView].src} />
        <Paper elevation={3}>
          <div className="driverInfo">
            <h1>{randomNames[dataView].name}</h1>
            <p>
              {randomNames[dataView].name} is a skilled bus driver with years of
              experience navigating diverse road conditions. Her precise
              handling and strong focus on passenger safety make her a trusted
              professional behind the wheel.
              <br />
              <br />
              {randomNames[dataView].name}'s adept maneuvering ensures smooth
              rides for passengers, while her keen awareness of traffic
              regulations guarantees adherence to safety protocols. Her
              courteous demeanor and efficient problem-solving skills make her a
              valued asset in the transportation industry.
            </p>
            <p style={{ marginLeft: "175px" }}>
              <p>
                <b>Age</b> - {randomNames[dataView].age}
                <b style={{ marginLeft: "95px" }}>Sex</b> -{" "}
                {randomNames[dataView].sex}
              </p>
              <p>
                <b>Experience</b> - {randomNames[dataView].experience}
                <b style={{ marginLeft: "50px" }}>Rating</b> -
                {randomNames[dataView].starRating}
              </p>
            </p>
            <Button
              variant="outlined"
              sx={{ width: "20px !important" }}
              onClick={() => setDialogOpen(true)}
            >
              Hire me
            </Button>

            <BootstrapDialog
              onClose={() => setDialogOpen(false)}
              aria-labelledby="customized-dialog-title"
              open={dialogOpen}
            >
              <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                Hirer Details
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
                <Box sx={{ padding: "30px", display: "flex" }}>
                  <div>
                    <Box sx={{ margin: "15px" }}>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        value={state.busBuddyId}
                        onChange={(e) =>
                          dispatchReducer({
                            type: "SET_BUS_BUDDY_ID",
                            payload: e.target.value,
                          })
                        }
                      />
                      <Typography gutterBottom>Bus Buddy's Bus ID</Typography>
                    </Box>

                    <Box sx={{ margin: "15px" }}>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        value={state.busId}
                        onChange={(e) =>
                          dispatchReducer({
                            type: "SET_BUS_ID",
                            payload: e.target.value,
                          })
                        }
                      />
                      <Typography gutterBottom>Registered Bus ID</Typography>
                    </Box>
                  </div>

                  <div>
                    <Box sx={{ margin: "15px" }}>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        value={state.travelDate}
                        onChange={(e) =>
                          dispatchReducer({
                            type: "SET_TRAVEL_DATE",
                            payload: e.target.value,
                          })
                        }
                      />
                      <Typography gutterBottom>Date of Travel</Typography>
                    </Box>
                    <Box sx={{ margin: "15px" }}>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        value={state.boardingPoint}
                        onChange={(e) =>
                          dispatchReducer({
                            type: "SET_BOARDING_POINT",
                            payload: e.target.value,
                          })
                        }
                        v
                      />
                      <Typography gutterBottom>Bus Boarding Point</Typography>
                    </Box>
                  </div>
                </Box>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => onBoardDriver()}>Save changes</Button>
              </DialogActions>
            </BootstrapDialog>
          </div>
        </Paper>
      </div>
    </div>
  );
}
