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
    {
      name: "Alice",
      age: "20",
      sex: "female",
      src: "https://images.unsplash.com/photo-1578041262130-633307b3bfd6?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      experience: 5,
      starRating: "★★★★★",
    },
    {
      name: "Bob",
      age: 31,
      sex: "male",
      src: "https://images.unsplash.com/photo-1502654253-6a533f295544?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      experience: 3,
      starRating: "★★★☆☆",
    },
    {
      name: "Charlie",
      age: 34,
      sex: "male",
      src: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      experience: 4,
      starRating: "★★★★☆",
    },
    {
      name: "Diana",
      age: 38,
      sex: "female",
      src: "https://images.unsplash.com/photo-1619721865905-72ec8bc4dbcf?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      experience: 2,
      starRating: "★★☆☆☆",
    },
    {
      name: "Ethan",
      age: 32,
      sex: "male",
      src: "https://images.unsplash.com/photo-1626565244872-206f4c1f9e57?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      experience: 5,
      starRating: "★★★★★",
    },
    {
      name: "Fion",
      age: 28,
      sex: "male",
      src: "https://nwbus.com/wp-content/uploads/2022/10/school-bus-driver--768x512.jpg",
      experience: 4,
      starRating: "★★★★☆",
    },
    {
      name: "George",
      age: 48,
      sex: "male",
      src: "https://images.unsplash.com/photo-1537211790624-e6f568af4b13?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      experience: 3,
      starRating: "★★★☆☆",
    },
    {
      name: "Hanna",
      age: 23,
      sex: "female",
      src: "https://images.unsplash.com/photo-1619722087489-f0b1a6fdbc6d?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      experience: 2,
      starRating: "★★☆☆☆",
    },
    {
      name: "Iva",
      age: 25,
      sex: "female",
      src: "https://images.unsplash.com/photo-1619722049858-841f43259e99?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      experience: 4,
      starRating: "★★★★☆",
    },
    {
      name: "Jessica",
      age: 36,
      sex: "female",
      src: "https://images.unsplash.com/photo-1524645343120-a4ae9f7d4343?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      experience: 1,
      starRating: "★☆☆☆☆",
    },
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
          </div>
        </Paper>
      </div>
    </div>
  );
}
