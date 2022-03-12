import React from 'react'
import {styles} from "./studentStyle"
function StudetList({ student, index, deleteHandler, updateHandler}) {

  return (
    <tr >
      <td style={styles.tableItem}>{index+1}</td>
      <td style={styles.tableItem}>{student.name}</td>
      <td style={styles.tableItem}>{student.batch}</td>
      <td style={styles.tableItem}>{student.roll}</td>
      <td style={styles.tableItem}>{student.stuClass}</td>
      <td>
        <button onClick={() => deleteHandler(index)}>Delete</button>
      </td>
      <td><button onClick={()=> updateHandler(student, index)}>Update</button></td>
    </tr>
  )
}

export default StudetList