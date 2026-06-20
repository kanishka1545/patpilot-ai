import { useState, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";

export default function Payments() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const [payments, setPayments] = useState(() => {
    const saved = localStorage.getItem("payments");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "payments",
      JSON.stringify(payments)
    );
  }, [payments]);

  const addPayment = () => {
    if (!name || !amount) return;

    setPayments([
      ...payments,
      {
        name,
        amount,
      },
    ]);

    setName("");
    setAmount("");
  };

  const deletePayment = (index) => {
    const updated = payments.filter(
      (_, i) => i !== index
    );

    setPayments(updated);
  };

  return (
    <MainLayout>
      <h1>💳 Payments Center</h1>

      <input
        type="text"
        placeholder="Recipient Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <br />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <br />
      <br />

      <button onClick={addPayment}>
        Send Payment
      </button>

      <hr />

      <h2>Payment History</h2>

      {payments.length === 0 ? (
        <p>No Payments Yet</p>
      ) : (
        payments.map((item, index) => (
          <div key={index}>
            <p>
              👤 {item.name} - ₹{item.amount}
            </p>

            <button
              onClick={() =>
                deletePayment(index)
              }
            >
              Delete
            </button>

            <hr />
          </div>
        ))
      )}
    </MainLayout>
  );
}