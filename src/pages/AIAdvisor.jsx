import { useState } from "react";
import MainLayout from "../layouts/MainLayout";

export default function AIAdvisor() {
  const [question, setQuestion] =
    useState("");

  const [response, setResponse] =
    useState("");

  const handleAskAI = () => {
    const q = question.toLowerCase();

    if (q.includes("phone")) {
      setResponse(
        "Buying a phone is affordable based on your current balance."
      );
    } else if (q.includes("save")) {
      setResponse(
        "Try saving at least 20% of your income every month."
      );
    } else {
      setResponse(
        "Your finances look stable. Continue tracking expenses."
      );
    }
  };

  return (
    <MainLayout>
      <h1>🤖 AI Financial Advisor</h1>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "20px",
        }}
      >
        <textarea
          rows="5"
          cols="60"
          placeholder="Ask a financial question..."
          value={question}
          onChange={(e) =>
            setQuestion(e.target.value)
          }
        />

        <br />
        <br />

        <button onClick={handleAskAI}>
          Ask AI
        </button>

        <hr />

        <h3>AI Response</h3>

        <p>{response}</p>
      </div>
    </MainLayout>
  );
}