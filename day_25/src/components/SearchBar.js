import React from "react";
import {
  TextField,
  Button
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

const SearchBar = (props) => {
  return (
    <div className="row">
      <div className="col-8">
        <TextField
          sx={{ input: { color: "#FFF", width: "280px" } }}
          id="standard-basic"
          label={
            <div className="d-flex justify-content-center align-items-center">
              <SearchIcon sx={{ width: "15px" }} />
              <span style={{ marginLeft: "6px" }}>search</span>
            </div>
          }
          variant="standard"
          onChange={props.handleSearchChange}
          className="search-bar"
        />
      </div>
      <div className="col-4">
        <Button  onClick={props.handleSearchClick} variant="contained" sx={{backgroundColor: "#FA474A", marginTop: "15px"}}>search</Button>
      </div>
    </div>
  );
};

export default SearchBar;
