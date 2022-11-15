import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Container, Paper } from "@mui/material";
import { useEffect } from "react";

const URL_STUDENT = "http://localhost:8080/student/add";
const URL_STUDENTS = "http://localhost:8080/student/getAll";

export default function Student() {
  const paperStyle = { padding: "50px 20px", width: 600, margin: "20px auto" };

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [students, setStudents] = useState([]);
  // const classes = useStyles();

  const handelClick = (e) => {
    e.preventDefault();
    const student = { name, address };

    fetch(URL_STUDENT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    }).then(() => console.log("New student added !!"));
  };

  useEffect(() => {
    fetch(URL_STUDENTS)
      .then((res) => res.json())
      .then((result) => {
        setStudents(result);
      });
  }, []);

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <h1 style={{ color: "blue" }}>
            <u>Add Student</u>
          </h1>

          <TextField
            id="outlined-basic"
            label="Student Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            id="outlined-basic"
            label="Student Address"
            variant="outlined"
            fullWidth
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <Button variant="contained" color="secondary" onClick={handelClick}>
            submit
          </Button>
        </Box>
      </Paper>
      <Paper elevation={3} style={paperStyle}>
        {students.map((student) => (
          <Paper
            elevation={6}
            style={{ margin: "10px", padding: "15px", textAlign: "left" }}
            key={student.id}
          >
            Id:{student.id}<br/>
            Name:{student.name}<br/>
            Address:{student.address}
          </Paper>
        ))}
      </Paper>
    </Container>
  );
}