import React from "react";
import SCPItem from "./components/SCPItem";
import scpList from "./data/data.json"; // Load SCP data
import "./styles/App.css"; // ✅ Import SCP Card Styles
import Logo from "../public/assets/SCP LOGO.png"; // Load SCP Foundation logo

function App() {
  return (
    <>
      <div className="header">
        <img src={Logo} alt="SCP Foundation" />{" "}
      </div>
      <h1>SCP Catalogue</h1>
      <div className="scp-catalog">
        {scpList.map((scp) => (
          <SCPItem key={scp.item} scp={scp} />
        ))}
      </div>
    </>
  );
}

export default App;
