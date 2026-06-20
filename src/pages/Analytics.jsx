import MainLayout from "../layouts/MainLayout";
import { PieChart, Pie, Tooltip, Legend } from "recharts";

const data = [
  { name: "Food", value: 5000 },
  { name: "Travel", value: 2000 },
  { name: "Recharge", value: 500 },
  { name: "Bills", value: 3000 },
];

export default function Analytics() {
  return (
    <MainLayout>
      <h1>📊 Analytics Dashboard</h1>

      <PieChart width={500} height={400}>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={120}
          fill="#8884d8"
          label
        />

        <Tooltip />
        <Legend />
      </PieChart>
    </MainLayout>
  );
}