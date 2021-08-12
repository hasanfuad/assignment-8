import React, { useEffect, useState } from "react";
import TeamDetails from "../TeamDetails/TeamDetails";

import "./Home.css";

const Home = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const url =
      "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTeam(data.teams));
  }, []);
  return (
    <div className="home-bg">
        <h1 className="main-title">Football Team Bazar</h1>
      <div className="container mt-5">
        {team.map((teamData) => (
          <TeamDetails key={teamData.idTeam} teamData={teamData} />
        ))}
      </div>
    </div>
  );
};

export default Home;
