import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";

export const Input = ({ validate, inputValid,value,setValue, ...props }) => {
  const [error, setError] = useState(false);
  const [touched, setTouched] = useState(false);
  const [helperText, setHelperText] = useState("");

  useEffect(() => {
    error ? setHelperText("Empty field") : setHelperText("");
    setTouched(true);
  }, [error]);

  useEffect(() => {
    inputValid(validate(value));
    if (touched) {
      setError(!validate(value));
    }
  }, [value]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const HandleBlur = () => {
    setError(!validate(value));
  };

  return (
    <>
      <h3 style={{ margin: "0px" }}>{props.label}</h3>
      <TextField
        error={error}
        onChange={handleChange}
        value={props.value}
        margin="normal"
        onBlur={HandleBlur}
        helperText={helperText}
        size="small"
        inputProps={{ "data-testid": props.testid }}
        {...props}
      />
    </>
  );
};
