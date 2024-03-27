import React, { useEffect } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Fab,
  FormGroup,
  Grid,
} from "@mui/material";
import get from "lodash/get";
import FileUpload from "../Pages/FileUpload";
import { postImage } from "../store/landing-page/thunk";
import { useDispatch, useSelector } from "react-redux";
import { isImagePosted } from "../store/landing-page/selector";
import { useNavigate } from "react-router-dom";

const HomePage = (props) => {
  const [fileName, setFileName] = React.useState("");
  const [base64Data, setBase64Data] = React.useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const success = useSelector(isImagePosted);

  const onCancel = () => {
    // setBase64Data("");
  };

  useEffect(() => {
    if (success === "success") {
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
    dispatch(postImage({ base64Data, fileName, operatorName: fileName }));
  };

  return (
    <Card
      style={{
        height: "100vh",
        borderRadius: 0,
        padding: "10px 20px 10px 20px",
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
    </Card>
  );
};
export default HomePage;
