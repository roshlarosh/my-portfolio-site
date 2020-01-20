import React from "react";
import Navbar from "./components/Navbar/Navbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";

function App() {
  const [sideDrawerOpen, setSideDrawOpen] = React.useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawOpen(sideDrawerOpen + true);
  };

  let sideDrawer;
  let backdrop;

  if (sideDrawerOpen) {
    sideDrawer = <SideDrawer />;
    backdrop = <Backdrop />;
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
