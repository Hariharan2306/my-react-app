import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CircularProgress,
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
import { isEmpty } from "lodash";

const HomePage = (props) => {
  const [fileName, setFileName] = React.useState("");
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
    if (!isEmpty(success) && success === "success") {
      navigate("/landing-page");
    }
  }, [success]);

  useEffect(() => {
    dispatch(getImages());
  }, []);

  console.log(allImages, "allImages");
  const handleChange = (event) => {
    const value = get(event, "target.value", "");
    setOperatorName(value);
  };

  return (
    <>
      {allImages?.length === 0 && <CircularProgress color="inherit" />}

      <Card
        style={{
          // height: "100vh",
          borderRadius: 0,
          padding: "70px 20px 10px 20px",
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
      </Card>
    </>
  );
};
export default HomePage;
