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
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
            background: "#1e293b",
            padding: "12px",
            borderRadius: "10px",
          }}
        >
          Dashboard
        </Link>

        <Link
          to="/payments"
          style={{
            color: "white",
            textDecoration: "none",
            background: "#1e293b",
            padding: "12px",
            borderRadius: "10px",
          }}
        >
          Payments
        </Link>

        <Link
          to="/analytics"
          style={{
            color: "white",
            textDecoration: "none",
            background: "#1e293b",
            padding: "12px",
            borderRadius: "10px",
          }}
        >
          Analytics
        </Link>

        <Link
          to="/advisor"
          style={{
            color: "white",
            textDecoration: "none",
            background: "#1e293b",
            padding: "12px",
            borderRadius: "10px",
          }}
        >
          AI Advisor
        </Link>

        <Link
          to="/goals"
          style={{
            color: "white",
            textDecoration: "none",
            background: "#1e293b",
            padding: "12px",
            borderRadius: "10px",
          }}
        >
          Goals
        </Link>
      </div>
    </div>
  );
}