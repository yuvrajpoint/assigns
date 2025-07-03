import { useParams, useNavigate } from "react-router-dom";
import { movies } from "../data";

const containerStyle = {
  maxWidth: "600px",
  margin: "2rem auto",
  padding: "2rem",
  background: "#fff",
  borderRadius: "8px",
  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
};

function Details() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === Number(id));
  const navigate = useNavigate();

  if (!movie) return <p>Movie not found</p>;

  return (
    <div style={containerStyle}>
      <h2>{movie.title}</h2>
      <img src={movie.image} alt={movie.title} style={{ width: "100%" }} />
      <p style={{ margin: "1rem 0" }}>{movie.description}</p>
      <button
        onClick={() => navigate(`/book/${movie.id}`)}
        style={{
          padding: "0.5rem 1rem",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Book Seat
      </button>
    </div>
  );
}

export default Details;
