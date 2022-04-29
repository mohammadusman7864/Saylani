import React from 'react'
import { Grid } from "@material-ui/core";
import AddToDo from './component/addToDo/AddToDo'
import ToDoList from './component/toDoList/ToDoList'
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
          <AddToDo />
          <ToDoList />
        </Grid>
      </Grid>

    </div>
  )
}

export default App