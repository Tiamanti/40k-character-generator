import React from 'react';
import {Grid} from "@mui/material";
import {getListOfNPCs} from "./services/retreivers";

function App() {
    const listOfNPCs = getListOfNPCs();
  return (
      <Grid container xs={12} alignContent='center' justifyContent='center'>
        <Grid item xs={2}>
          Empty Page
            { listOfNPCs.toString() }
        </Grid>
      </Grid>
  );
}

export default App;
