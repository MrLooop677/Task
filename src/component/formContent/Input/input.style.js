import styled from "styled-components";
import { mainBlueColor } from "../form/form.style";
import { TextField } from "@mui/material";

export const FormInput = styled(TextField)(() => ({
  "& .MuiInputBase-input": {
    color: "#fff",
  },

  "& label.Mui-focused": {
    color: mainBlueColor,
  },
  ".css-aqpgxn-MuiFormLabel-root-MuiInputLabel-root": {
    color: mainBlueColor,
  },
  ".MuiInput-underline:before": {
    borderBottomColor: mainBlueColor,
  },
  ".MuiInput-underline:after ": {
    borderBottomColor: mainBlueColor,
  },
}));
