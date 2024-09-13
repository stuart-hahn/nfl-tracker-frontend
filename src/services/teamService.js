const API_URL = "http://localhost:3000/teams";

export const fetchTeams = async () => {
  const response = await fetch(API_URL);
  return await response.json();
};

export const fetchTeamWithPlayers = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  return await response.json();
};

export const createTeam = async (team) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(team),
  });
  return await response.json();
};
