import { movies } from "../data";
import { useNavigate } from "react-router-dom";

const containerStyle = {
  maxWidth: "1000px",
  margin: "0 auto",
  padding: "2rem",
};

function Home() {
  const navigate = useNavigate();
  return (
    <div style={containerStyle}>
      <h1 style={{ textAlign: "center" }}>🎥 Movie List</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1rem",
        }}
      >
        {movies.map((movie) => (
          <div
            key={movie.id}
            onClick={() => navigate(`/movie/${movie.id}`)}
            style={{
              cursor: "pointer",
              textAlign: "center",
              border: "1px solid #ccc",
              borderRadius: "8px",
              overflow: "hidden",
              padding: "0.5rem",
              background: "#f9f9f9",
            }}
          >
            <img
              src={movie.image}
              alt={movie.title}
              style={{ width: "100%" }}
            />
            <p style={{ fontWeight: "bold" }}>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
