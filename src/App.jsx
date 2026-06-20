import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Payments from "./pages/Payments";
import Analytics from "./pages/Analytics";
import AIAdvisor from "./pages/AIAdvisor";
import Goals from "./pages/Goals";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/advisor" element={<AIAdvisor />} />
        <Route path="/goals" element={<Goals />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;