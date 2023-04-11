import { AccountCircle } from "@mui/icons-material";
import React from "react";
import { mainBlueColor } from "../form/form.style";
import { Box } from "@mui/material";
import { FormInput } from "./input.style";

const InputComp = ({ label, name, userData, setUserData }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <Box sx={{ display: "flex", alignItems: "flex-end", mb: 5 }}>
      <AccountCircle sx={{ color: mainBlueColor, mr: 1, my: 0.5 }} />
      <FormInput
        required
        id="input-with-sx"
        label={label}
        variant="standard"
        fullWidth
        name={name}
        value={userData.name}
        onChange={handleInputChange}
      />
    </Box>
  );
};

export default InputComp;
