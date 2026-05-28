import { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import FreelancerPage from "./pages/FreelancerPage";
import Button from "./components/eventHandler/Button";

function App() {

  const handleClick = (name) => {
    alert(`Chào ${name}`);
  };

  const handleClickParent = () => {
    alert(`This is parent`);
  };

  return (
    <>
      <div onClick={handleClickParent} className="flex justify-center items-center min-h-screen gap-3">
        <Button label="Click me" onClick={handleClick}/>
        <Button variant="danger" onClick={handleClick} label="Delete me" />
        <Button variant="warning" onClick={handleClick} label="Warning" />
      </div>
    </>
  );
}

export default App;
