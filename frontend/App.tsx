import React, { useState } from "react";

function App() {
  const [result, setResult] = useState<any>(null);

  async function proposeTrade() {
    try {
      const trade = {
        fromTeam: { id: 1, name: "Lakers", roster: [] },
        toTeam: { id: 2, name: "Celtics", roster: [] },
        playersFrom: [
          { id: 1, name: "LeBron James", salary: 40, value: 95 },
          { id: 3, name: "Austin Reaves", salary: 12, value: 70 }
        ],
        playersTo: [{ id: 4, name: "Jayson Tatum", salary: 32, value: 90 }],
        picksFrom: [{ round: 2, year: 2026, value: 10 }],
        picksTo: [{ round: 1, year: 2025, value: 18 }]
      };

      const res = await fetch("http://localhost:3000/trade", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(trade)
      });

      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      setResult(await res.json());
    } catch (err) {
      console.error("Trade request failed:", err);
    }
  }

  return (
    <div>
      <h1>NBA Trade Simulator</h1>
      <button onClick={proposeTrade}>Propose Trade</button>
      {result && (
        <div>
          <h2>Trade Summary</h2>
          <p>Lakers receive: {result.summary.teamAReceives}</p>
          <p>Celtics receive: {result.summary.teamBReceives}</p>

          <h2>Grades</h2>
          <p>Lakers Grade: {result.teamA}</p>
          <p>Celtics Grade: {result.teamB}</p>

          <h2>Details</h2>
          <p>Fairness: {result.details.fairness}</p>
          <p>
            Lakers → Value: {result.details.teamA.valueReceived}, Salary:{" "}
            {result.details.teamA.salaryTaken}, Net:{" "}
            {result.details.teamA.netGain}
          </p>
          <p>
            Celtics → Value: {result.details.teamB.valueReceived}, Salary:{" "}
            {result.details.teamB.salaryTaken}, Net:{" "}
            {result.details.teamB.netGain}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
