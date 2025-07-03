import { useEffect, useState } from "react";

type Team = {
  id: number;
  Team: string;
  Matches: number;
  Won: number;
  Lost: number;
  Tied: number;
  NRR: number;
  Points: number;
};

function App() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch(
          "https://my-json-server.typicode.com/FreSauce/json-ipl/data"
        );
        const data: Team[] = await response.json();
        console.log("Fetched data:", data);

        // Sort by NRR (ascending)
        const sortedData = data.sort((a, b) => a.NRR - b.NRR);
        setTeams(sortedData);
      } catch (error) {
        console.error("Failed to fetch data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ textAlign: "center" }}>IPL 2022 Points Table</h1>

      {loading ? (
        <p style={{ textAlign: "center" }}>Loading...</p>
      ) : (
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "2rem",
          }}
        >
          <thead>
            <tr>
              <th style={thStyle}>Team</th>
              <th style={thStyle}>Matches</th>
              <th style={thStyle}>Won</th>
              <th style={thStyle}>Lost</th>
              <th style={thStyle}>Tied</th>
              <th style={thStyle}>NRR</th>
              <th style={thStyle}>Points</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team) => (
              <tr key={team.id}>
                <td style={tdStyle}>{team.Team}</td>
                <td style={tdStyle}>{team.Matches}</td>
                <td style={tdStyle}>{team.Won}</td>
                <td style={tdStyle}>{team.Lost}</td>
                <td style={tdStyle}>{team.Tied}</td>
                <td style={tdStyle}>{team.NRR.toFixed(3)}</td>
                <td style={tdStyle}>{team.Points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

const thStyle: React.CSSProperties = {
  border: "1px solid #ccc",
  padding: "8px",
  background: "#666",
  textAlign: "left",
};

const tdStyle: React.CSSProperties = {
  border: "1px solid #ccc",
  padding: "8px",
};

export default App;
