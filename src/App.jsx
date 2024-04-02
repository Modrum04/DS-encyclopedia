import { useState } from "react";

import "./App.css";
import Builder from "./pages/Builder.jsx";
import Card from "./components/Card.jsx";
import Characters from "./pages/Characters.jsx";

import { Outlet, Link } from "react-router-dom";

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState("/");
  const [isOpen, setIsopen] = useState(false);

  return (
    <>
      <h1>Modrum's Dark Souls Builder</h1>
      <p>Welcome in our unofficial Dark Souls III Build Generator</p>
      <p>Select your starting class then choose your attributes</p>
      <Link to="/characters" onClick={() => setIsopen(true)}>
        <img
          className={`${isOpen ? "invisible" : ""} bonefire`}
          src="src/assets/bonefire.webp"
        ></img>
      </Link>
      <div className="main-container">
        <Outlet context={[selectedCharacter, setSelectedCharacter]} />
      </div>
    </>
  );
}

export default App;
