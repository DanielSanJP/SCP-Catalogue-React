import React from "react";
import "../styles/catalogue.css"; // ✅ Import SCP Card Styles

const SCPItem = ({ scp }) => {
  return (
    <div className="scp-card">
      <div className="cardContainment">
        <h2 className="cardTitle">#{scp.item}</h2>
        <img
          className="cLevel"
          src={`${scp.containmentIcon}`}
          alt={scp.containment}
        />
      </div>

      <div className="image-container">
        <img className="cardImg" src={`${scp.image}`} alt={scp.name} />
        <div className="cardName">{scp.name}</div>
      </div>

      <div className="cardDesc">
        <div className="StatColumn">
          <strong>Disruption:</strong> {scp.disruption}
        </div>
        <div className="StatColumn">
          <strong>Risk:</strong> {scp.risk}
        </div>
        <div className="StatColumn">
          <strong>Clearance:</strong> {scp.clearance}
        </div>

        <div className="cardStats">
          <div className="StatColumn">#{scp.item}</div>
          <div className="StatColumn">{scp.containment}</div>
        </div>
      </div>
    </div>
  );
};

export default SCPItem;
