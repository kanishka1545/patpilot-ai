import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div
      style={{
        width: "250px",
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        padding: "20px",
      }}
    >
      <h1>💰 PayPilot AI</h1>

      <hr />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          marginTop: "20px",
        }}
      >
        <Link to="/">Dashboard</Link>
        <Link to="/payments">Payments</Link>
        <Link to="/analytics">Analytics</Link>
        <Link to="/advisor">AI Advisor</Link>
        <Link to="/goals">Goals</Link>
      </div>
    </div>
  );
}