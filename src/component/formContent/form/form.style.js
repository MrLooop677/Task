import { Box, Button } from "@mui/material";
import styled from "styled-components";

export const mainBlueColor = "rgb(197, 236, 253)";
export const FormContainer = styled(Box)(() => ({
  marginTop: "56px",
  paddingTop: "50px",
  paddingBottom: "50px",
}));
export const FormContent = styled(Box)(() => ({
  boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
  paddingTop: "50px",
  paddingBottom: "50px",
}));
export const FormBtn = styled(Button)(() => ({
  background: "#39b7dd",
  textAlign: "center",
  padding: "15px",
  borderRadius: "5px",
  color: "#fff",
  cursor: "pointer",
  textTransform: "uppercase",
}));
