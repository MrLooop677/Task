import { Grid } from "@mui/material";
import { AppContent, AppTitle, AppWrapper, FormContent } from "./app.style";
import FormComp from "./component/formContent/form/FormComp";
import { useState } from "react";
import ShowData from "./component/showData/ShowData";

function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  return (
    <AppContent className="App">
      <AppWrapper>
        <AppTitle variant="h3" component="h1">
          Searching Form
        </AppTitle>
        <FormContent>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <FormComp data={data} setData={setData} setLoading={setLoading} />
            </Grid>
            <Grid item xs={12} md={6}>
              <ShowData data={data} loading={loading} />
            </Grid>
          </Grid>
        </FormContent>
      </AppWrapper>
    </AppContent>
  );
}

export default App;
