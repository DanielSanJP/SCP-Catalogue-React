import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/catalogue.css";

const SCPDetail = () => {
  const { id } = useParams(); // ✅ Get SCP ID from URL
  const [scp, setScp] = useState(null);
  const baseURL = process.env.PUBLIC_URL || "."; // ✅ Adjusts for GitHub Pages

  useEffect(() => {
    console.log(`🔍 Fetching: ${baseURL}/data.json`); // ✅ Debugging log

    fetch(`${baseURL}/data.json`)
      .then((res) => {
        console.log("📄 Response Status:", res.status); // ✅ Debugging log
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("📊 Data received in SCPDetail:", data); // ✅ Debugging log
        const foundSCP = data.find((item) => item.item === id); // ✅ Find SCP by ID
        setScp(foundSCP);
      })
      .catch((error) => {
        console.error("❌ Error fetching SCP data in SCPDetail:", error);
      });
  }, [id]);

  if (!scp) {
    return (
      <h2 style={{ textAlign: "center", color: "white" }}>SCP not found</h2>
    );
  }

  return (
    <div className="scp-detail">
      <h1 className="scpHeader">
        SCP-{scp.item}: {scp.name}
      </h1>

      <div className="image-container">
        <img
          className="scpImagePage"
          src={`${baseURL}/${scp.image}`}
          alt={scp.name}
        />
      </div>

      <div className="specs">
        <div className="readCard">
          <strong>Containment:</strong> {scp.containment}
        </div>
        <div className="readCard">
          <strong>Disruption:</strong> {scp.disruption}
        </div>
        <div className="readCard">
          <strong>Risk:</strong> {scp.risk}
        </div>
        <div className="readCard">
          <strong>Clearance:</strong> {scp.clearance}
        </div>
      </div>

      <div className="readCard">
        <strong>Summary:</strong>
        <p>{scp.summary}</p>
      </div>

      <div className="readCard">
        <strong>Special Containment Procedures:</strong>
        <p>{scp.containmentInfo}</p>
      </div>

      <div className="backButton">
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          🔙 Back to SCP List
        </Link>
      </div>
    </div>
  );
};

export default SCPDetail;
