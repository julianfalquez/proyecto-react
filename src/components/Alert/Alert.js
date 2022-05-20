import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const AlertComponent = React.forwardRef(function AlertComponent(props, ref) {
  return <MuiAlert elevation={6} ref={ref} {...props} />;
});

const SnackbarComponent = (props) => {
  return (
    <Snackbar
      open={props.open}
      autoHideDuration={5000}
      onClose={props.handleClose}
    >
      <AlertComponent
        onClose={props.handleClose}
        severity={props.status}
        sx={{ width: "100%" }}
      >
          {props.message}
      </AlertComponent>
    </Snackbar>
  );
};

export default function Alert(props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(props.open);
  }, [props.open]);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      {ReactDOM.createPortal(
        <SnackbarComponent
          handleClose={handleClose}
          status={props.status}
          open={open}
          message={props.message}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
}
