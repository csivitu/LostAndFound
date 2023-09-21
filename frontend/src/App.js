import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginSignUp from "./components/LoginSignUp";
import Dashboard from "./components/Dashboard";
import Upload from "./components/Upload";
import Profile from "./components/Profile";

// Add protected routes with redirects

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/user_validation" element={<LoginSignUp />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
