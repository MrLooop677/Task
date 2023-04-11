import { InputLabel, Select } from "@mui/material";
import styled from "styled-components";
import { mainBlueColor } from "../form/form.style";

export const CustomSelect = styled(Select)({
  border: `2px solid ${mainBlueColor}`,
  color: mainBlueColor,
  "& .MuiSelect-icon": {
    color: mainBlueColor,
  },

  ".MuiSelect-select": {
    color: mainBlueColor,
  },
});
export const CustomInputLabel = styled(InputLabel)({
  color: `${mainBlueColor} !important`,
});
