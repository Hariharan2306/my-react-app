// ImageSlider.js
import React from "react";
import { useTheme } from "@mui/material/styles";
import {
  MobileStepper,
  Paper,
  Typography,
  Button,
  Box,
  Pagination,
} from "@mui/material";
import SwipeableViews from "react-swipeable-views";
// import img1 from "../assets/img1.jpg";
import img4 from "../assets/img4.jpg";
const images = [
  img4,
  //   img1,
  // img2,
  // Add more image paths as needed
];

const ImageSlider = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ width: "570px", height: "500px", flexGrow: 1 }}>
      <SwipeableViews
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((image, index) => (
          <Box key={index} sx={{ padding: 2 }}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{ width: "572px", height: "545px", objectFit: "fill" }}
            />
          </Box>
        ))}
      </SwipeableViews>
      {/* <div style={{ margin: "0 auto" }}>
        <MobileStepper
          steps={images.length}
          position="static"
          variant="dots"
          activeStep={activeStep}
          nextButton={null}
          backButton={null}
          style={{ backgroundColor: "transparent" }}
          next={null}
          back={null}
        />
      </div> */}
      {/* <Pagination
        count={images.length}
        page={activeStep}
        onChange={(event, value) => handleStepChange(value - 1)}
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: 2,
          "& .MuiPaginationItem-root": {
            margin: "0 4px", // Adjust the space between dots as needed
          },
        }}
      /> */}
    </Box>
  );
};

export default ImageSlider;
