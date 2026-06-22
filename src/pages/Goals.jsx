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
    localStorage.setItem(
      "goals",
      JSON.stringify(goals)
    );
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

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "20px",
        }}
      >
        <input
          placeholder="Goal Name"
          value={goal}
          onChange={(e) =>
            setGoal(e.target.value)
          }
        />

        <br />
        <br />

        <input
          placeholder="Target Amount"
          value={amount}
          onChange={(e) =>
            setAmount(e.target.value)
          }
        />

        <br />
        <br />

        <button onClick={addGoal}>
          Add Goal
        </button>
      </div>

      <br />

      {goals.map((item, index) => (
        <div
          key={index}
          style={{
            background: "white",
            padding: "15px",
            borderRadius: "15px",
            marginBottom: "10px",
          }}
        >
          <h3>{item.goal}</h3>

          <p>₹{item.amount}</p>

          <button
            onClick={() =>
              setGoals(
                goals.filter(
                  (_, i) => i !== index
                )
              )
            }
          >
            Delete
          </button>
        </div>
      ))}
    </MainLayout>
  );
}