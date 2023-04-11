import React from "react";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Box,
} from "@mui/material";
import { EmptyData, TableCellText } from "./showData.style";
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
          <TableContainer sx={{ height: "100%" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCellText>Field</TableCellText>
                  <TableCellText>Value</TableCellText>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCellText>Name</TableCellText>
                  <TableCellText>{`${data?.fname} ${data?.mname} ${data?.lname}`}</TableCellText>
                </TableRow>
                <TableRow>
                  <TableCellText>Nationality</TableCellText>
                  <TableCellText>{data?.nat}</TableCellText>
                </TableRow>
                <TableRow>
                  <TableCellText>Score</TableCellText>
                  <TableCellText>{data?.screen_result[0]?.score}</TableCellText>
                </TableRow>

                <TableRow>
                  <TableCellText>Place of Birth</TableCellText>
                  <TableCellText>{data?.nat}</TableCellText>
                </TableRow>
                <TableRow>
                  <TableCellText>Description</TableCellText>
                  <TableCellText>
                    {data?.Description ? data.Description : "Not Found"}
                  </TableCellText>
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
