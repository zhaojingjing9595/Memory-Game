import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
// import GameNavbar from "./components/gameNavbar/GameNavbar";
import Home from "./Pages/Home/Home";
import Game from "./Pages/Game/Game";
import "./App.css";
import GameNavbar from "./components/GameNavbar/GameNavbar";
import AuthProvider from "./components/AuthProvider/AuthProvider";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <GameNavbar />
        <Routes>
          <Route index element={<Home />} />
          <Route
            path="/game"
            element={
              <ProtectedRoute>
                {" "}
                <Game />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
