import { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import FreeLancerPage from "./pages/FreelancerPage";
import Counter from "./components/stateUpdateUI/Counter";
import WelcomeForm from "./components/stateUpdateUI/WelcomeForm";

function App() {
  return (
    <>
      <WelcomeForm/>
    </>
  );
}

export default App;
