# NBA Trade Simulator

A full‑stack demo project that simulates NBA trades between teams.  
Built with **TypeScript + Express (backend)** and **React + Vite (frontend)**.

---

## Features
- Trade **players** and **draft picks** between two teams
- Simple grading system (A–D) based on net gain and fairness
- Transaction‑style summaries: *“Lakers receive Jayson Tatum and a 2025 Round 1 pick”*
- Backend API (`/trade`) built with Express
- Frontend UI built with React + Vite
- Example rosters included in `backend/sampleRoster.json`

---
```
## 📂 Project Structure
nba-trade-simulator/ 
├── backend/ │ 
├── index.ts # Express server 
│ ├── models.ts # Player, Team, DraftPick, TradeProposal 
│ ├── tradeEvaluator.ts # Trade logic 
│ └── sampleRoster.json # Example teams and picks 
├── frontend/ 
│ ├── App.tsx # React UI 
│ ├── main.tsx # Entry point 
│ └── index.html # Root HTML 
├── vite.config.ts # Vite config 
├── package.json 
├── tsconfig.json 
├── .gitignore 
└── README.md
```
---

## Getting Started

### 1. Install dependencies
npm install

### 2. Run backend (Express API)
npm run dev
- Backend runs at: http://localhost:3000

### 3. Run frontend (React + Vite)
npm run frontend
- Frontend runs at: http://localhost:5173

### 📌 Roadmap
- Add salary cap rules
- Support multi‑team trades
- Expand roster data
- UI polish with team logos and player stats

