import React from "react";
import { useDispatch } from "react-redux";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
// import { itemsActions } from "../../store/reducers/itemSlicer";

import "./SearchCard.css";

function SearchCard() {
  const dispatch = useDispatch();
  const handleChange = (event) => {
    // dispatch(itemsActions.setSearchTerm({ value: event.target.value}));
    // dispatch(itemsActions.filterItems({ search: searchTearm }));

    dispatch({ type: "SET_SEARCH_TEARM", payload: event.target.value });
    dispatch({ type: "FILTER_ITEMS"});
  };

  const handleStockCheck = () => {
    // dispatch(itemsActions.toggleStock());
    // dispatch(itemsActions.filterItems({ search: searchTearm }));
    dispatch({ type: "TOGGLE_STOCK"});
    dispatch({ type: "FILTER_ITEMS"});
  };

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
            onChange={handleChange}
          />
        </div>
        <div className="checkbox_container">
          <FormGroup>
            <FormControlLabel
              control={<Checkbox onChange={handleStockCheck} />}
              label="Only show products in Stock"
            />
          </FormGroup>
        </div>
      </Box>
    </Container>
  );
}

export default SearchCard;
