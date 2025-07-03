import { useLocation } from "react-router-dom";

const containerStyle = {
  maxWidth: "600px",
  margin: "2rem auto",
  padding: "2rem",
  background: "#fff",
  borderRadius: "8px",
  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
};

function Confirm() {
  const { state } = useLocation();

  if (!state) return <p>No booking data.</p>;

  const bookingId = Math.floor(100000 + Math.random() * 900000);

  return (
    <div style={containerStyle}>
      <h2 style={{ color: "green" }}>🎉 Seat Booked Successfully!</h2>
      <p>
        <strong>Booking ID:</strong> #{bookingId}
      </p>
      <p>
        <strong>Name:</strong> {state.name}
      </p>
      <p>
        <strong>Email:</strong> {state.email}
      </p>
      <p>
        <strong>Mobile:</strong> {state.mobile}
      </p>
    </div>
  );
}

export default Confirm;
