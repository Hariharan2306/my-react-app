import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormGroup,
  InputLabel,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postImage } from "../store/landing-page/thunk";
import get from "lodash/get";
import { useNavigate } from "react-router-dom";
import { isImagePosted } from "../store/landing-page/selector";
import isEmpty from "lodash/isEmpty";

const AddBus = () => {
  const [fileName, setFileName] = React.useState("");
  const [base64Data, setBase64Data] = React.useState("");
  const [operatorName, setOperatorName] = useState("");
  const [noOfSeats, setNoOfSeats] = useState(0);
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();
  const success = useSelector(isImagePosted);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isEmpty(success) && success === "success") {
      navigate("/landing-page");
    }
  }, [success]);

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
  const handleCancel = () => {
    navigate("/new-landing-page");
  };
  return (
    <div
      style={{
        backgroundColor: "white",
        height: "100vh",
        padding: " 79px 42px 0 41px",
      }}
    >
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
        </Card>
      </form>
      <div
        style={{
          backgroundColor: "white",
          padding: "70px 20px 10px 20px",
          marginTop: "20px",
        }}
      >
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
      </div>
      <CardActions>
        <Button
          //   className={classes.fab}
          type="reset"
          onClick={() => handleCancel()}
          color="secondary"
        >
          Cancel
        </Button>

        <Button
          //   className={classes.fab}
          variant="primary"
          color="blue"
          style={{ color: "blue" }}
          type="submit"
          onClick={(event) => {
            submitImage(event);
          }}
        >
          Save
        </Button>
      </CardActions>
    </div>
  );
};

export default AddBus;
