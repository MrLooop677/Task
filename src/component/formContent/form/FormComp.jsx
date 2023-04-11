import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import SelectCountry from "../selectCountry/SelectCountry";
import InputComp from "../Input/InputComp";

const FormComp = ({ setData, setLoading }) => {
  const [userData, setUserData] = useState({
    fname: "",
    mname: "",
    lname: "",
    nat: "",
  });
  const titles = ["first Name", "Middle Name", "last Name"];
  const names = ["fname", "mname", "lname"];
  const apiLink =
    "http://150.230.49.47:8080/api/v1/integration/focal/screen/individual";
  const inputs = titles.map((title, index) => (
    <InputComp
      setUserData={setUserData}
      userData={userData}
      name={names[index]}
      label={`Enter ${title}`}
      key={`${title}`}
    />
  ));
  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(apiLink, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();

      setData(data);
      setLoading(false);
    } catch (error) {
      console.error(`Error posting data: ${error}`);
    }
  };

  return (
    <Box sx={{ pl: 2, pr: 2 }}>
      <form onSubmit={HandleSubmit}>
        {inputs}
        <SelectCountry setUserData={setUserData} userData={userData} />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          endIcon={<SendIcon />}
        >
          Search
        </Button>
      </form>
    </Box>
  );
};

export default FormComp;
