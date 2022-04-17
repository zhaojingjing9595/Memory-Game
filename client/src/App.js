import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
// import GameNavbar from "./components/gameNavbar/GameNavbar";
import Home from "./Pages/Home/Home";
import Game from "./Pages/Game/Game";
import "./App.css";
import GameNavbar from "./components/GameNavbar/GameNavbar";

function App() {
  return (
    <div className="App">
      <GameNavbar />
      {/* <Home /> */}
      <Game />
    </div>
  );
}

export default App;
