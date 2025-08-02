import React, { useState } from "react";
import "./App.css";
import History from "./components/History";

function App() {
  const [inputValue, setSearchTerm] = useState("");
  const [address, setAddress] = useState();

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setAddress(inputValue);
  };

  return (
    <div className="App">
      <header>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            placeholder="search by address"
            onChange={handleChange}
          />
          <button type="submit">Search</button>
        </form>
      </header>

      {address && <h1>Ethereum history of {address}</h1>}
      {address && <History address={address} />}
    </div>
  );
}

export default App;