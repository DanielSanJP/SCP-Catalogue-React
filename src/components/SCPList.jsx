import React, { useEffect, useState } from "react";
import SCPItem from "./SCPItem";
import "../styles/catalogue.css";

const SCPList = () => {
  const [scpData, setScpData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const baseURL = import.meta.env.BASE_URL || ".";
    console.log("🔍 Trying to fetch:", `${baseURL}data.json`);

    fetch(`${import.meta.env.BASE_URL}data.json`)
      .then((response) => response.json())
      .then((data) => {
        console.log("📊 Data received:", data);
        setScpData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("❌ Error fetching SCP data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="scp-catalog">
      {loading ? (
        <h2 style={{ textAlign: "center", color: "white" }}>Loading SCPs...</h2>
      ) : scpData.length === 0 ? (
        <h2 style={{ textAlign: "center", color: "white" }}>No SCPs found!</h2>
      ) : (
        scpData.map((scp) => <SCPItem key={scp.item} scp={scp} />)
      )}
    </div>
  );
};

export default SCPList;
