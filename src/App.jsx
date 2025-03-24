import React from "react";
import { Routes, Route, Link } from "react-router-dom"; // ✅ Import Link
import SCPList from "./components/SCPList";
import SCPDetail from "./components/SCPDetail";
import "./styles/App.css";

const App = () => {
  const baseURL = import.meta.env.BASE_URL || ".";

  return (
    <div>
      <div className="header">
        {/* ✅ Clickable Logo */}
        <Link to="/" className="logo-link">
          <img
            src={`${import.meta.env.BASE_URL}assets/SCP Logo.png`}
            alt="SCP Logo"
            className="logo"
          />
        </Link>

        <h1>SCP Catalogue</h1>
      </div>

      <Routes>
        <Route path="/" element={<SCPList />} />
        <Route path="/scp/:id" element={<SCPDetail />} />
      </Routes>
    </div>
  );
};

export default App;
