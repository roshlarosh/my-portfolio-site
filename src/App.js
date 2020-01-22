import React from "react";
import Navbar from "./components/Navbar/Navbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import LandingPage from "./components/LandingPage/LandingPage";
import ProjectPage from "./components/ProjectPage/ProjectPage";
import ContactPage from "./components/ContactPage/ContactPage";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import AboutPage from "./components/AboutPage/AboutPage";
import "./App.css";
import { Route, Switch } from "react-router-dom";

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

  let backdrop;

  if (sideDrawerOpen) {
    backdrop = <Backdrop click={backdropClickHandler} />;
  }

  return (
    <main style={{ height: "100%" }} className="mainPage">
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/projects" component={ProjectPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={ErrorPage} />
      </Switch>
      <Navbar drawerClickHandler={drawerToggleClickHandler} />
      <SideDrawer show={sideDrawerOpen} />
      {backdrop}
    </main>
  );
}

export default App;
