import React, { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const onInput = (e) => {
    setInput(e.target.value);
  };

  const onAdd = () => {
    if (input.trim() !== "") {
      setTasks((prev) => [...prev, input]);
      setInput("");
    }
  };

  const onDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const containerStyle = {
    maxWidth: "600px",
    margin: "50px auto",
    padding: "30px",
    fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
    backgroundColor: "#f9f9f9",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "2rem",
    marginBottom: "20px",
    color: "#333",
  };

  const inputStyle = {
    width: "70%",
    padding: "10px 15px",
    fontSize: "1rem",
    border: "2px solid #ddd",
    borderRadius: "8px",
    outline: "none",
    marginRight: "10px",
    transition: "border-color 0.3s ease",
  };

  const buttonStyle = {
    padding: "10px 16px",
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#007BFF",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    boxShadow: "0 4px 10px rgba(0, 123, 255, 0.2)",
    transition: "all 0.3s ease",
  };

  const buttonHoverStyle = {
    ...buttonStyle,
    transform: "scale(1.05)",
    backgroundColor: "#0056b3",
  };

  const taskListStyle = {
    listStyle: "none",
    paddingLeft: 0,
    marginTop: "20px",
  };

  const taskItemStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: "12px 16px",
    borderRadius: "8px",
    marginBottom: "10px",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)",
    transition: "background-color 0.3s ease",
  };

  const taskSpanStyle = {
    flex: 1,
    textAlign: "left",
    fontSize: "1rem",
    color: "#333",
  };

  const deleteButtonStyle = {
    marginLeft: "10px",
    padding: "6px 10px",
    fontSize: "0.9rem",
    color: "#fff",
    backgroundColor: "#dc3545",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>To-Do List</h1>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Enter a task"
          value={input}
          onChange={onInput}
          style={inputStyle}
        />
        <button
          onClick={onAdd}
          style={input ? buttonHoverStyle : buttonStyle}
        >
          Add Todo
        </button>
      </div>

      <ul style={taskListStyle}>
        {tasks.map((item, index) => (
          <li key={index} style={taskItemStyle}>
            <span style={taskSpanStyle}>{item}</span>
            <button onClick={() => onDelete(index)} style={deleteButtonStyle}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;