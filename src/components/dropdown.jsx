import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { makeStyles } from "@mui/styles";
import { get } from "lodash";
import { useNavigate } from "react-router";

export default function DropDown(props) {
  // eslint-disable-next-line react/prop-types
  const { options } = props;
  const navigate = useNavigate();
  const [service, setServices] = React.useState("");

  const useStyles = makeStyles(() => ({
    dropDown: {
      "& .css-1869usk-MuiFormControl-root": {
        margin: "0px",
      },
      "& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
        {
          padding: "0px",
          color: "white",
        },
    },
  }));
  const classes = useStyles();

  const handleChange = (event) => {
    const value = get(event, "target.value", "");
    setServices(value);
    switch (value) {
      case "drivers":
        navigate("/drivers");
        break;
      case "":
        navigate("landing-page");
        break;
      default:
        break;
    }
  };

  return (
    <div className={classes.dropDown}>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={service}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          {/*  eslint-disable-next-line react/prop-types*/}
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
