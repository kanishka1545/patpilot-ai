import { useState } from "react";
import MainLayout from "../layouts/MainLayout";

export default function AIAdvisor() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");

  const handleAskAI = () => {
    const q = question.toLowerCase();

    if (q.includes("phone")) {
      setResponse(
        "Based on your balance, buying a phone seems affordable."
      );
    } else if (q.includes("save")) {
      setResponse(
        "You should save at least 20% of your monthly income."
      );
    } else if (q.includes("bike")) {
      setResponse(
        "Consider your monthly expenses before buying a bike."
      );
    } else {
      setResponse(
        "Your financial condition looks stable. Continue tracking expenses."
      );
    }
  };

  return (
    <MainLayout>
      <h1>🤖 AI Financial Advisor</h1>

      <textarea
        rows="5"
        cols="60"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask financial question..."
      />

      <br /><br />

      <button onClick={handleAskAI}>
        Ask AI
      </button>

      <hr />

      <h3>AI Response</h3>

      <p>{response}</p>
    </MainLayout>
  );
}