import { Routes, Route, useNavigate, data } from "react-router-dom";
import "./App.css";
import { RegisterModule } from "./components/RegisterModule/registerModule";
import { LoginModule } from "./components/loginModule/LoginModule";
import { Profile } from "./components/profile/profile";
import { useState, useEffect } from "react";
import { useAuth } from "./components/auth/auth";
import { WorkoutPage } from "./components/workout/workout";

function App() {


  return (
    <>
      <Routes>
        <Route path="/register" element={<RegisterModule />}></Route>
        <Route path="/" element={<LoginModule />}></Route>
        <Route path="profile" element={<Profile />}></Route>
        <Route path="workout" element={<WorkoutPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
