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
      <h1>📊 PayPilot Dashboard</h1>

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
          background: "#f1f5f9",
          padding: "20px",
          borderRadius: "15px",
        }}
      >
        <h2>Project Stats</h2>

        <p>Total Payments: {payments.length}</p>

        <p>Total Goals: {goals.length}</p>

        <p>Total Amount Sent: ₹{totalSent}</p>
      </div>

      <br />

      <div
        style={{
          background: "#f8fafc",
          padding: "20px",
          borderRadius: "15px",
        }}
      >
        <h2>Recent Activity</h2>

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