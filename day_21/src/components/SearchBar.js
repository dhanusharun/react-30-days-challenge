import React from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

const SearchBar = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="row">
      <div className="col-4">
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
        />
      </div>
      <div className="col-4">
        <FormControl variant="standard" sx={{minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={age}
            onChange={handleChange}
            label="Age"
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
    </div>
  );
};

export default SearchBar;
