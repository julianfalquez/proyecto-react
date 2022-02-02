import React, { useState } from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import "./SearchCard.css";

function SearchCard() {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          bgcolor: "#bfb5fa",
          borderRadius: "10px",
          boxShadow: "2px 2px 4px #b1aebf",
        }}
      >
        <div className="input_container">
          <TextField
            id="search_items"
            label="Search Text"
            variant="standard"
            className="mui_search_input"
          />
        </div>
        <div className="checkbox_container">
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Only show products in Stock"
            />
          </FormGroup>
        </div>
      </Box>
    </Container>
  );
}

export default SearchCard;
