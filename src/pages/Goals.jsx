import { useState, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";

export default function Goals() {
  const [goal, setGoal] = useState("");
  const [amount, setAmount] = useState("");

  const [goals, setGoals] = useState(() => {
    const saved = localStorage.getItem("goals");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("goals", JSON.stringify(goals));
  }, [goals]);

  const addGoal = () => {
    if (!goal || !amount) return;

    setGoals([
      ...goals,
      {
        goal,
        amount,
      },
    ]);

    setGoal("");
    setAmount("");
  };

  return (
    <MainLayout>
      <h1>🎯 Savings Goals</h1>

      <input
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        placeholder="Goal Name"
      />

      <br />
      <br />

      <input
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Target Amount"
      />

      <br />
      <br />

      <button onClick={addGoal}>
        Add Goal
      </button>

      <hr />

      {goals.map((item, index) => (
  <div key={index}>
    <h3>{item.goal}</h3>
    <p>₹{item.amount}</p>

    <button
      onClick={() => {
        const updatedGoals = goals.filter(
          (_, i) => i !== index
        );

        setGoals(updatedGoals);
      }}
    >
      Delete
    </button>

    <hr />
  </div>
))}
    </MainLayout>
  );
}