
import { useState } from "react";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Rahul", roll: "101", marks: 85 },
    { id: 2, name: "Priya", roll: "102", marks: 72 },
    { id: 3, name: "Arjun", roll: "103", marks: 35 },
    { id: 4, name: "Sneha", roll: "104", marks: 90 },
    { id: 5, name: "Kiran", roll: "105", marks: 28 }
  ]);

  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [marks, setMarks] = useState("");

  function addStudent(e) {
    e.preventDefault();

    if (!name.trim() || !roll.trim() || marks === "") {
      alert("Please fill all details");
      return;
    }

    if (Number(marks) < 0 || Number(marks) > 100) {
      alert("Marks must be between 0 and 100");
      return;
    }

    const newStudent = {
      id: Date.now(),
      name: name,
      roll: roll,
      marks: Number(marks)
    };

    setStudents([...students, newStudent]);

    setName("");
    setRoll("");
    setMarks("");
  }

  return (
    <div className="container">
      <h1>Student Management System</h1>
      <p>Manage student details and results</p>

      <form onSubmit={addStudent}>
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Roll Number"
          value={roll}
          onChange={(e) => setRoll(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter Marks (0-100)"
          min="0"
          max="100"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
        />

        <button type="submit">Add Student</button>
      </form>

      <h2>Student Details</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll Number</th>
            <th>Marks</th>
            <th>Result</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.roll}</td>
              <td>{student.marks}</td>
              <td>
                {student.marks >= 40 ? (
                  <span className="pass">PASS</span>
                ) : (
                  <span className="fail">FAIL</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
