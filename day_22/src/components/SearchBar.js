import React from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

const SearchBar = (props) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="row">
      <div className="col-5 col-lg-2">
        <TextField
          sx={{ input: { color: "#FFF" } }}
          id="standard-basic"
          label={
            <div className="d-flex justify-content-center align-items-center">
              <SearchIcon sx={{ width: "15px" }} />
              <span style={{ marginLeft: "6px" }}>search</span>
            </div>
          }
          variant="standard"
          onChange={props.handleSearchChange}
        />
      </div>
      <div className="col-5 col-lg-2">
        <FormControl variant="standard" sx={{minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">genre</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={age}
            onChange={handleChange}
            label="genre"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="col-2 col-lg-2">
        <Button  onClick={props.handleSearchClick} variant="contained" sx={{backgroundColor: "#FA474A", marginTop: "15px"}}>search</Button>
      </div>
    </div>
  );
};

export default SearchBar;
