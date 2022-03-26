import { Grid } from "@material-ui/core";
import React from 'react'
import Create from './component/Create/Create'
import Navbar from './component/Navbar/Navbar'
import Leftbar from './component/Leftbar/Leftbar'

function App() {
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Create />
        </Grid>
      </Grid>
    </div>
  )
}

export default App