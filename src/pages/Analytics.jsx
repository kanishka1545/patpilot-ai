import MainLayout from "../layouts/MainLayout";
import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  Cell,
} from "recharts";

const data = [
  { name: "Food", value: 5000 },
  { name: "Travel", value: 2000 },
  { name: "Recharge", value: 500 },
  { name: "Bills", value: 3000 },
];

const COLORS = [
  "#4f46e5",
  "#06b6d4",
  "#10b981",
  "#f59e0b",
];

export default function Analytics() {
  return (
    <MainLayout>
      <h1>📊 Expense Analytics</h1>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "20px",
          boxShadow:
            "0px 5px 15px rgba(0,0,0,0.1)",
        }}
      >
        <PieChart width={500} height={400}>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={120}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={
                  COLORS[
                    index % COLORS.length
                  ]
                }
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </MainLayout>
  );
}