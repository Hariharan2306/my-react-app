import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import isEmpty from "lodash/isEmpty";
import { Card } from "@mui/material";

const ViewBus = () => {
  const { state } = useLocation();
  const [selectedData, setSelectedData] = useState({});

  useEffect(() => {
    if (!isEmpty(state) && !isEmpty(state.operatorName)) {
      setSelectedData(state);
    }
  }, []);
  console.log(state, "selectedData");
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
      <div style={{ color: "black" }}>Rating: {selectedData.rating}</div>
    </div>
  );
};
export default ViewBus;
