import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Fab,
  FormGroup,
  Grid,
  InputLabel,
  TextField,
} from "@mui/material";
import get from "lodash/get";
import FileUpload from "../Pages/FileUpload";
import { getImages, postImage } from "../store/landing-page/thunk";
import { useDispatch, useSelector } from "react-redux";
import { allAppImages, isImagePosted } from "../store/landing-page/selector";
import { useNavigate } from "react-router-dom";

const HomePage = (props) => {
  const [fileName, setFileName] = React.useState("");
  const [base64Data, setBase64Data] = React.useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const success = useSelector(isImagePosted);
  const [allBusImages, setAllBusImages] = useState([]);
  const [operatorName, setOperatorName] = useState("");
  const [noOfSeats, setNoOfSeats] = useState(0);
  const [rating, setRating] = useState(0);
  const allImages = useSelector(allAppImages);

  const onCancel = () => {
    // setBase64Data("");
  };

  useEffect(() => {
    if (success === "success") {
      navigate("/landing-page");
    }
  }, [success]);

  useEffect(async () => {
    dispatch(getImages());
  }, []);

  const handleSubmit = async (event) => {
    const file = event.target.files[0]; // Access the file object from event.target.files
    setFileName(file.name); // Assuming setFileName is a state setter function

    if (file) {
      const reader = new FileReader();
      reader.onload = handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  };

  const handleReaderLoaded = (event) => {
    const binaryString = event.target.result;
    const base64Data = btoa(binaryString); // Convert binary string to base64
    setBase64Data(base64Data);
  };

  const submitImage = (event) => {
    event.preventDefault();
    dispatch(
      postImage({ base64Data, fileName, operatorName, noOfSeats, rating })
    );
  };
  console.log(allImages, "allImages");
  const handleChange = (event) => {
    const value = get(event, "target.value", "");
    setOperatorName(value);
  };
  const handleSeatsChange = (event) => {
    const value = get(event, "target.value", "");
    setNoOfSeats(value);
  };
  const handleRatingChange = (event) => {
    const value = get(event, "target.value", "");
    setRating(value);
  };
  return (
    <>
      <Card
        style={{
          // height: "100vh",
          borderRadius: 0,
          padding: "10px 20px 10px 20px",
        }}
      >
        {allImages?.map((item) => {
          return (
            <Card
              sx={{ width: "30%", display: " inline-grid", margin: "15px" }}
              onClick={() => navigate("/view-bus", { state: item })}
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
                <img
                  src={`data:image/jpeg;base64,${item.base64Data}`}
                  alt="Uploaded"
                  style={{ width: "100%", height: "300px" }}
                />
              </Card>
              Operator Name : {item.operatorName}
              <div>Number of Seats: {item.noOfSeats}</div>
              Rating: {item.rating}
            </Card>
          );
        })}
        <form>
          <Card>
            <CardHeader title="Upload Pictures" />
            <CardContent>
              <div>
                <FormGroup>
                  <input
                    type="file"
                    className="custom-file-input"
                    id={"inputGroupFileAddon01"}
                    accept=".jpg, .jpeg, .png"
                    aria-describedby="inputGroupFileAddon01"
                    onChange={handleSubmit}
                  />
                </FormGroup>
              </div>
            </CardContent>

            <CardActions>
              <Button
                //   className={classes.fab}
                type="reset"
                onClick={() => onCancel()}
                color="secondary"
              >
                Cancel
              </Button>

              <Button
                //   className={classes.fab}
                variant="extended"
                color="primary"
                type="submit"
                onClick={(event) => {
                  submitImage(event);
                }}
              >
                Save
              </Button>
            </CardActions>
          </Card>
        </form>
        <InputLabel>Operator Name</InputLabel>
        <TextField
          id="outlined-basic"
          helperText={"Please Enter Operator Name"}
          className="inputStyle"
          value={operatorName}
          name="applicationValue"
          onChange={handleChange}
        />
        <InputLabel>No of Seats</InputLabel>
        <TextField
          id="outlined-basic"
          helperText={"Enter the No of seats"}
          className="inputStyle"
          value={noOfSeats}
          name="applicationValue"
          onChange={handleSeatsChange}
        />
        <InputLabel>Ratings</InputLabel>
        <TextField
          id="outlined-basic"
          helperText={"Enter the Ratings"}
          className="inputStyle"
          value={rating}
          name="applicationValue"
          onChange={handleRatingChange}
        />
      </Card>
    </>
  );
};
export default HomePage;
