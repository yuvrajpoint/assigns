import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

const containerStyle = {
  maxWidth: "600px",
  margin: "2rem auto",
  padding: "2rem",
  background: "#fff",
  borderRadius: "8px",
  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
};

function Book() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ name: "", email: "", mobile: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/confirm", { state: { ...formData, movieId: id } });
  };

  return (
    <div style={containerStyle}>
      <h2>Book Your Seat</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          onChange={handleChange}
          style={{ padding: "0.5rem", fontSize: "1rem" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleChange}
          style={{ padding: "0.5rem", fontSize: "1rem" }}
        />
        <input
          type="tel"
          name="mobile"
          placeholder="Mobile"
          required
          onChange={handleChange}
          style={{ padding: "0.5rem", fontSize: "1rem" }}
        />
        <button
          type="submit"
          style={{
            padding: "0.75rem",
            fontSize: "1rem",
            background: "green",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Book;
