import React, { useState } from "react";
// import { Data } from "./Data"
import StudetList from "./StudetList";
import { styles } from "./studentStyle";

function Student() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [batch, setBatch] = useState("");
  const [roll, setRoll] = useState("");
  const [stuIndex, setStuIndex] = useState();
  const [stuClass, setStuClass] = useState("");
  const [error, setError] = useState(false);
  const [flage, setFlage] = useState(false)

  const ctaHandler = () => {
    if (!name || !batch || !roll || !stuClass) {
      setError(true)
      return;
    } else {
      let student = {
        name,
        batch,
        stuClass,
        roll,
        id: Math.random() * 9832239,
      };
      setStudents([...students, student]);
      setError(false);
      setName("");
      setBatch("");
      setRoll("");
      setStuClass("");
    }
  };

  const deleteHandler = (index) => {
    let newStudent = students.filter((stu, i) => index !== i)
    setStudents([...newStudent]);
  }

  const updateHandler = (student, index) => {
    setStuIndex(index)
    setName(student.name);
    setBatch(student.batch);
    setRoll(student.roll);
    setStuClass(student.stuClass);
    setFlage(true)
  }

  const newUpdateHandler = () => {
    let updatedList = students.map((student, ind) => {
      if (stuIndex === ind) {
        return {
          name,
          batch,
          stuClass,
          roll,
        }
      } else {
        return student
      }
    })
    setStudents([...updatedList])
    setName("");
    setBatch("");
    setRoll("");
    setStuClass("");
    // setStuIndex('');
    setFlage(false)

  }

  return (
    <div>
      <h1>New Student Add</h1>
      <input
        type="text"
        value={name}
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        value={batch}
        placeholder="batch"
        onChange={(e) => setBatch(e.target.value)}/>
      <br />
      <br />
      <input
        type="text"
        value={roll}
        placeholder="roll"
        onChange={(e) => setRoll(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        value={stuClass}
        placeholder="stuClass"
        onChange={(e) => setStuClass(e.target.value)}
      />
      <br />
      <br />
      {error && <p style={styles.paragraph}>All Filleds Required</p>}

      {flage ? <button onClick={newUpdateHandler}>Update</button>
        :
        <button onClick={ctaHandler}>submit</button>

      }

      <hr />

      <table style={styles.container}>
        <thead>
          <tr>
            <th style={styles.tableItem}>No.</th>
            <th style={styles.tableItem}>Name</th>
            <th style={styles.tableItem}>Batch</th>
            <th style={styles.tableItem}>Roll</th>
            <th style={styles.tableItem}>class</th>
            <th style={styles.tableItem}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((item, index) => {
            return <StudetList index={index} student={item} deleteHandler={deleteHandler} updateHandler={updateHandler} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Student;
