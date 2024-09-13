import React, { useState, useEffect } from "react";
import { fetchTeams, fetchTeamWithPlayers } from "./services/teamService";

function App() {
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);

  useEffect(() => {
    const loadTeams = async () => {
      const data = await fetchTeams();
      setTeams(data);
    };
    loadTeams();
  }, []);

  const handleSelectTeam = async (id) => {
    const team = await fetchTeamWithPlayers(id);
    setSelectedTeam(team);
  };

  return (
    <div className="App">
      <h1>NFL Stats Tracker</h1>
      <h2>Teams</h2>
      <ul>
        {teams.map((team) => (
          <li key={team.id} onClick={() => handleSelectTeam(team.id)}>
            {team.city} {team.name} (Wins: {team.wins}, Losses: {team.losses})
          </li>
        ))}
      </ul>
      {selectedTeam && (
        <>
          <h2>
            {selectedTeam.city} {selectedTeam.name} Players
          </h2>
          <ul>
            {selectedTeam.players.map((player) => (
              <li key={player.id}>
                {player.name} - {player.position} (Passing Yards:{" "}
                {player.passing_yards}, Rushing Yards: {player.rushing_yards},
                Touchdowns: {player.touchdowns})
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default App;
