import { Box, Typography } from "@mui/material";
import styled from "styled-components";

export const AppContent = styled(Box)(() => ({
  minHeight: "100vh",
  background: " url('https://i.imgur.com/kk76J5I.jpg') no-repeat ",
  backgroundSize: "cover",
  width: "100%",
  position: "relative",
}));
export const AppTitle = styled(Typography)(() => ({
  color: "#c5ecfd",
  textAlign: " center",
  marginBottom: "25px",
}));
export const FormContent = styled(Box)(() => ({
  marginTop: "50px",
}));
export const AppWrapper = styled(Box)(() => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: "1000px",
  background: "rgba(0,0,0,0.8)",
  padding: "30px",
  borderRadius: "5px",
  boxShadow: "0 0 10px rgba(0,0,0,0.3)",
}));
