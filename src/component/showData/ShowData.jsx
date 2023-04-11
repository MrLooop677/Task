import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from "@mui/material";
import { EmptyData } from "./showData.style";
import Loading from "../Loading";

const ShowData = ({ data, loading }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100%"
    >
      {Object.keys(data).length ? (
        loading ? (
          <Loading />
        ) : (
          <TableContainer sx={{ height: "100%" }} component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Field</TableCell>
                  <TableCell>Value</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>{`${data?.fname} ${data?.mname} ${data?.lname}`}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Nationality</TableCell>
                  <TableCell>{data?.nat}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Score</TableCell>
                  <TableCell>{data?.screen_result[0]?.score}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Place of Birth</TableCell>
                  <TableCell>{data?.nat}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Description</TableCell>
                  <TableCell>
                    {data?.Description ? data.Description : "Not Found"}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        )
      ) : (
        <EmptyData variant="h3">Not Found Data</EmptyData>
      )}
    </Box>
  );
};

export default ShowData;
