import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { countries } from "countries-list";
import { CustomInputLabel, CustomSelect } from "./selectCountry.style";
export default function SelectCountry({ userData, setUserData }) {
  const handleChange = (event) => {
    setUserData({ ...userData, nat: event.target.value });
  };

  const countryKeys = countries ? Object.keys(countries) : [];

  return (
    <FormControl sx={{ mb: 2, minWidth: 120 }} fullWidth>
      <CustomInputLabel id="demo-select-small">Select Country</CustomInputLabel>
      <CustomSelect
        required
        labelId="demo-select-small"
        id="demo-select-small"
        value={userData.nat}
        label="country"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {countryKeys.map((code) => (
          <MenuItem key={code} value={countries[code].name}>
            {countries[code].name}
          </MenuItem>
        ))}
      </CustomSelect>
    </FormControl>
  );
}
