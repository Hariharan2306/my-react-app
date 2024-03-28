import React, { useState } from "react";
import { Alert as MuiAlert, Snackbar } from "@mui/material";
import { isEmpty } from "lodash";

const PREFIX = "Alert";
const classes = {
  snackbar: `${PREFIX}-snackbar`,
  snackbarJobView: `${PREFIX}-snackbarJobView`,
};

function UnStyledAlert(props) {
  // eslint-disable-next-line react/prop-types
  const { children, onClose, jobView, className, severity, color } = props;
  const [open, setOpen] = useState(true);
  const updatedSeverity = isEmpty(severity) ? color : severity;

  const handleClose = () => {
    setOpen(false);
    if (onClose) {
      onClose();
    }
  };

  return (
    <Snackbar
      open={open}
      onClose={handleClose}
      autoHideDuration={null}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      className={`${className}${
        jobView ? classes.snackbarJobView : classes.snackbar
      }`}
    >
      <MuiAlert severity={updatedSeverity} color={color} onClose={handleClose}>
        {children}
      </MuiAlert>
    </Snackbar>
  );
}

UnStyledAlert.defaultProps = {
  onClose: () => {},
  jobView: false,
};

export default UnStyledAlert;
