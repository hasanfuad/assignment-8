import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { SocialIcon } from "react-social-icons";

import "./TeamInfo.css";

import infoAreaImage from "../../male.png";

const TeamInfo = () => {
  const { teamId } = useParams();

  const [teamInfo, setTeamInfo] = useState([]);

  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const matchedData = data.teams.find((data) => data.idTeam === teamId);
        setTeamInfo(matchedData);
      });
  }, [teamId]);
  return (
    <div className="team-info-background">
      <div className="container">
        <div className="info-image">
          <img src={teamInfo.strTeamBadge} alt={teamInfo.strTeamBadge} />
        </div>

        {/* Info Area  */}
        <div className="info-area">
          <div className="info-area-text">
            <h3>{teamInfo.strTeam}</h3>
            <p>Founded: {teamInfo.intFormedYear}</p>
            <p>Sports type: {teamInfo.strSport}</p>
            <p>Gender: {teamInfo.strGender}</p>
            <Link style={{ textDecoration: "none", color: "gray" }} to="/home">
              <p>back to home</p>
            </Link>
          </div>
          <div className="info-area-image">
            <img src={infoAreaImage} alt="info area pic" />
          </div>
        </div>
        {/* Info Area End  */}
      </div>

      {/* Description Area  */}
      <div className="info-description">
        <div className="info-description-1">
          <p>{teamInfo.strDescriptionEN}</p>
        </div>
        <div className="info-description-2">
          <p>{teamInfo.strDescriptionEN}</p>
        </div>
      </div>
      {/* Description Area End  */}
      <footer className="footer-icon">
        <span>
          <SocialIcon className="social-icon1" url="https://twitter.com/" />
        </span>
        <span>
          <SocialIcon className="social-icon2" url="https://facebook.com/" />
        </span>
        <span>
          <SocialIcon
            className="social-icon3"
            url="https://www.youtube.com/c/"
          />
        </span>
      </footer>
    </div>
  );
};

export default TeamInfo;
