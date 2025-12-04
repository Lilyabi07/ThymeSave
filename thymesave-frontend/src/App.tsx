//import { useState } from "react";
import "./App.css";
import { Box, Grid } from "@mui/material";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <Box>
        <Grid container id={"main"} size={{ xs: 12, xl: 12 }}>
          <Grid>
            <Grid container id={"header"} spacing={4}>
              <Grid size={7}>
                <h2>ThymeSave</h2>
              </Grid>
              <Grid size={5}>
                <h2>- Nav</h2>
              </Grid>
              {/* the header should be one header component */}
            </Grid>
            <Grid container id={"body"}>
              <Grid>
                <p>ThymeSave</p>
                <p>webapp</p>
                <p>:p</p>
                {/* the body should be separated into pieces - some code should
              check if user is logged in and depending - switche to landing / app*/}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default App;
