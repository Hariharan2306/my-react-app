import * as React from "react";
import "../styles/scroll-box.css";
import { Paper } from "@mui/material";
import { get } from "lodash";
import { getAllDrivers } from "../API/Drivers/thunk";
import { useDispatch, useSelector } from "react-redux";
import { allDriversSelector } from "../API/Drivers/selector";

export default function Drivers() {
  const drivers = ["abc", "xyz", "pqr"];
  const [dataView, setDataView] = React.useState(0);
  const dispatch = useDispatch();
  const allDrivers = useSelector(allDriversSelector);

  const randomNames = [
    { name: "Alice", age: "20", sex: "female" },
    { name: "Bob", age: 31, sex: "female" },
    { name: "Charlie", age: 34, sex: "male" },
    { name: "Diana", age: 38, sex: "female" },
    { name: "Ethan", age: 32, sex: "female" },
    { name: "Fiona", age: 28, sex: "male" },
    { name: "George", age: 48, sex: "male" },
    { name: "Hannah", age: 23, sex: "male" },
    { name: "Ivan", age: 25, sex: "female" },
    { name: "Jessica", age: 36, sex: "female" },
  ];

  React.useEffect(() => {
    dispatch(getAllDrivers());
  }, [dataView]);
  console.log(allDrivers, "allDrivers");
  return (
    <div style={{ margin: "20px" }}>
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
        <img
          className="driverImage"
          src="https://nwbus.com/wp-content/uploads/2022/10/school-bus-driver--768x512.jpg"
        />
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
              Alice's adept maneuvering ensures smooth rides for passengers,
              while her keen awareness of traffic regulations guarantees
              adherence to safety protocols. Her courteous demeanor and
              efficient problem-solving skills make her a valued asset in the
              transportation industry.
            </p>
            <p>
              <b>Age</b> - {randomNames[dataView].age}
              <br />
              <br />
              <b>Sex</b> - {randomNames[dataView].sex}
            </p>
          </div>
        </Paper>
      </div>
    </div>
  );
}
