import express from "express";
import cors from "cors";
import { evaluateTrade } from "./tradeEvaluator";
import { TradeProposal } from "./models";

const app = express();
app.use(express.json());
app.use(cors()); // 👈 allow requests from frontend

app.post("/trade", (req, res) => {
  const trade: TradeProposal = req.body;
  const result = evaluateTrade(trade);
  res.json(result);
});

app.listen(3000, () => {
  console.log("NBA Trade Simulator API running on http://localhost:3000");
});
