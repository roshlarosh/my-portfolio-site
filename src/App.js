import React from "react";
import Navbar from "./components/Navbar/Navbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";

function App() {
  const [sideDrawerOpen, setSideDrawerOpen] = React.useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(sideDrawerOpen + true);
    console.log("This is first", sideDrawerOpen);
  };

  const backdropClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
    console.log("This is second", sideDrawerOpen);
  };

  let sideDrawer;
  let backdrop;

  if (sideDrawerOpen) {
    sideDrawer = <SideDrawer />;
    backdrop = <Backdrop click={backdropClickHandler} />;
  }

  return (
    <div style={{ height: "100%" }}>
      <Navbar drawerClickHandler={drawerToggleClickHandler} />
      {sideDrawer}
      {backdrop}
      <main style={{ marginTop: 64 }}>
        <p>This is the page paragraph</p>
      </main>
    </div>
  );
}

export default App;
