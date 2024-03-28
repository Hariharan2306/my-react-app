import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postMechanic } from "../store/landing-page/thunk";
import { successMechanicSelector } from "../store/landing-page/selector";
import { isEmpty } from "lodash";
import { useNavigate } from "react-router-dom";

const AddMechanic = () => {
  const [mechanicName, setMechanicName] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [area, setArea] = useState("");
  const [experience, setExperience] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (name) => (event) => {
    if (name === "mechanicName") {
      setMechanicName(event.target.value);
    } else if (name === "age") {
      setAge(event.target.value);
    } else if (name === "sex") {
      setSex(event.target.value);
    } else if (name === "area") {
      setArea(event.target.value);
    } else if (name === "experience") {
      setExperience(event.target.value);
    }
  };

  const addMechanic = () => {
    dispatch(postMechanic({ mechanicName, age, sex, area, experience }));
  };

  const successMechanics = useSelector(successMechanicSelector);
  useEffect(() => {
    if (!isEmpty(successMechanics) && successMechanics === "success") {
      setMechanicName("");
      setAge("");
      setSex("");
      setArea("");
      setExperience("");
      navigate("/new-landing-page");
    }
  }, [successMechanics]);
  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          height: "100vh",
          padding: "20px",
        }}
      >
        <span style={{ marginTop: "10px" }}>
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Mechanic Name"
            value={mechanicName}
            onChange={handleChange("mechanicName")}
          />
        </span>
        <span>
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Age"
            value={age}
            onChange={handleChange("age")}
          />
        </span>
        <span>
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Sex"
            value={sex}
            onChange={handleChange("sex")}
          />
        </span>
        <span>
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Area"
            value={area}
            onChange={handleChange("area")}
          />
        </span>
        <TextField
          id="outlined-basic"
          variant="outlined"
          label="Experience"
          value={experience}
          onChange={handleChange("experience")}
        />
        <div>
          <Button
            variant="contained"
            style={{ width: "200px", margin: "10px" }}
            onClick={() => addMechanic()}
          >
            Add Mechanic
          </Button>{" "}
        </div>
      </div>
    </>
  );
};

export default AddMechanic;
