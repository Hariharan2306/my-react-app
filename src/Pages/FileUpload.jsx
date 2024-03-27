import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import { isEmpty, get } from "lodash";
import { FormControl, FormHelperText } from "@mui/material";

const useStyles = makeStyles(() => ({
  root: {
    margin: 5,
    "& .custom-file-input": {
      zIndex: "2",
      margin: "0",
      opacity: "0",
      position: "relative",
      width: "100%",
      height: "calc(1.5em + 0.75rem + 2px)",
    },
    "& .custom-file-label": {
      left: "20px",
      zIndex: "1",
      height: "calc(1.5em + 0.75rem + 2px)",
      fontWeight: "400",
      backgroundColor: "#fff",
      border: "1px solid #e4e7ea",
      borderRadius: "0.25rem",
      position: "absolute",
      top: "10px",
      right: "0",
      width: "250px",
      padding: "0.375rem 0.75rem",
      lineHeight: "1.5",
      cursor: "pointer",
      "&::after": {
        content: '"Browse"',
        position: "absolute",
        top: "0",
        right: "0",
        padding: "0.375rem 0.75rem",
        lineHeight: "1.5",
        color: "#5c6873",
        bottom: "0px",
        zIndex: "3",
        display: "block",
        height: "calc(1.5em + 0.78rem)",
        backgroundColor: "#f0f3f5",
        borderLeft: "inherit",
        borderRadius: "0 0.25rem 0.25rem 0",
      },
    },
  },
}));

function FileUpload(props) {
  const classes = useStyles();
  const [customErrorMsg, setCustomErrorMsg] = useState("");
  const [customErrorFlag, setCustomErrorFlag] = useState(false);

  const checkValidation = (value) => {
    const { errorMessages } = props;
    let message = "";
    const { required } = errorMessages;
    if (required && isEmpty(value)) {
      message = required;
    }
    return message;
  };

  const handleChange = (e) => {
    const targetFiles = get(e, "target.files[0].name");
    if (targetFiles) {
      const tempFile = get(e, "target.files[0]");
      const tempFileName = get(e, "target.files[0].name");
      const uploadedFile = { fileName: tempFileName, file: tempFile };
      const { id, uploadFile } = props;
      const message = checkValidation(uploadedFile);
      setCustomErrorMsg(message);
      setCustomErrorFlag(true);
      uploadFile(uploadedFile, [{ id, message }]);
    }
  };

  const errorMessageToDisplay = () => {
    const { id, errorList } = props;
    if (customErrorFlag) {
      return customErrorMsg;
    }
    const errorMessage = errorList.find((error) => error.id === id);
    if (errorMessage) {
      return errorMessage.message;
    }
    return "";
  };

  const { id, value = {}, accept, dataTestid = "" } = props;
  const { fileName = "" } = value;
  return (
    <FormControl
      component="fileUpload"
      error={!isEmpty(errorMessageToDisplay())}
    >
      <div className={classes.root} data-testid="file-upload-test">
        <div className="input-group">
          <div className="custom-file">
            <input
              data-testid={dataTestid}
              type="file"
              className="custom-file-input"
              id={id}
              accept={accept}
              aria-describedby="inputGroupFileAddon01"
              onChange={handleChange}
            />
            {fileName || "Choose file"}
          </div>
        </div>
      </div>

      <FormHelperText>{errorMessageToDisplay()}</FormHelperText>
    </FormControl>
  );
}

FileUpload.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  errorMessages: PropTypes.shape(PropTypes.objectOf().isRequired).isRequired,
  errorList: PropTypes.arrayOf(PropTypes.objectOf.isRequired).isRequired,
  accept: PropTypes.string.isRequired,
  uploadFile: PropTypes.func.isRequired,
};
export default FileUpload;
