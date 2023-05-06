import axios from "axios";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const handleSubmit = (e) => {
    if (password !== confPassword) {
      alert("password Not Match");
    } else {
      axios.post("https://645647222e41ccf1691874d1.mockapi.io/user", {
        name,
        age,
        password,
        confPassword,
      });
      alert(
        'A form was submitted with Name :"' +
          name +
          '" ,Age :"' +
          age +
          '" and Email :"' +
          email +
          '"'
      );
      setAge(null);
      setEmail("");
      setName("");
      setConfPassword("");
      setPassword("");
    }
    e.preventDefault();
  };
  return (
    <div className="App">
      <header className="App-header">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <h2> BARBAD ZINDAGI </h2>
          <h3> Registration Form </h3>
          <label>Name:</label>
          <br />
          <input
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label>Age:</label>
          <br />
          <input
            type="number"
            value={age}
            required
            onChange={(e) => setAge(e.target.value)}
          />
          <br />

          <label>Email:</label>
          <br />
          <input
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />

          <label>Password:</label>
          <br />
          <input
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <label>Confirm Password:</label>
          <br />
          <input
            type="password"
            value={confPassword}
            required
            onChange={(e) => setConfPassword(e.target.value)}
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </header>
    </div>
  );
}

export default App;
