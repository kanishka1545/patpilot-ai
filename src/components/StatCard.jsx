export default function StatCard({ title, amount }) {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #4f46e5, #06b6d4)",
        color: "white",
        padding: "25px",
        borderRadius: "20px",
        width: "250px",
        boxShadow: "0px 8px 20px rgba(0,0,0,0.2)",
      }}
    >
      <h3>{title}</h3>
      <h1>{amount}</h1>
    </div>
  );
}