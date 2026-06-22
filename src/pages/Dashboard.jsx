import MainLayout from "../layouts/MainLayout";
import StatCard from "../components/StatCard";

export default function Dashboard() {
  const payments =
    JSON.parse(localStorage.getItem("payments")) || [];

  const goals =
    JSON.parse(localStorage.getItem("goals")) || [];

  const totalSent = payments.reduce(
    (sum, item) => sum + Number(item.amount),
    0
  );

  return (
    <MainLayout>
      <h1
        style={{
          color: "#1e293b",
          fontSize: "35px",
        }}
      >
        📊 PayPilot Dashboard
      </h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        <StatCard
          title="Total Balance"
          amount="₹43,000"
        />

        <StatCard
          title="Monthly Income"
          amount="₹50,000"
        />

        <StatCard
          title="Expenses"
          amount="₹7,000"
        />

        <StatCard
          title="Savings"
          amount="₹36,000"
        />

        <StatCard
          title="Total Sent"
          amount={`₹${totalSent}`}
        />
      </div>

      <br />

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "20px",
          boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
        }}
      >
        <h2>📈 Project Stats</h2>

        <p>Total Payments: {payments.length}</p>

        <p>Total Goals: {goals.length}</p>

        <p>Total Amount Sent: ₹{totalSent}</p>
      </div>

      <br />

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "20px",
          boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
        }}
      >
        <h2>🕒 Recent Activity</h2>

        {payments.length === 0 ? (
          <p>No Recent Payments</p>
        ) : (
          payments.map((item, index) => (
            <p key={index}>
              ✅ {item.name} - ₹{item.amount}
            </p>
          ))
        )}
      </div>
    </MainLayout>
  );
}