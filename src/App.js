import React from "react";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main style={{ marginTop: 64 }}>
        <p>This is the page paragraph</p>
      </main>
    </div>
  );
}

export default App;
