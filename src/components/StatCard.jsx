export default function StatCard({ title, amount }) {
  return (
    <div
      style={{
        background: "#1e293b",
        color: "white",
        padding: "20px",
        borderRadius: "15px",
        width: "250px",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
      }}
    >
      <h3>{title}</h3>
      <h1>{amount}</h1>
    </div>
  );
}