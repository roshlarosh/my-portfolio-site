import React from "react";
import Navbar from "./components/Navbar/Navbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";

function App() {
  return (
    <div style={{ height: "100%" }}>
      <Navbar />
      <SideDrawer />
      <Backdrop />
      <main style={{ marginTop: 64 }}>
        <p>This is the page paragraph</p>
      </main>
    </div>
  );
}

export default App;
