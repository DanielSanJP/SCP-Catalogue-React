import React from "react";
import { Link } from "react-router-dom";
import "../styles/catalogue.css";

const SCPItem = ({ scp }) => {
  const baseURL = import.meta.env.BASE_URL || ".";

  return (
    <Link to={`/scp/${scp.item}`} className="scp-card">
      <div className="cardContainment">
        <h2 className="cardTitle">#{scp.item}</h2>
        <img
          className="cLevel"
          src={`${baseURL}${scp.containmentIcon}`}
          alt={scp.containment}
        />
      </div>
      <div className="image-container">
        <img
          className="cardImg"
          src={`${baseURL}${scp.image}`}
          alt={scp.name}
        />
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
    </Link>
  );
};

export default SCPItem;
