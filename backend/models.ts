export interface Player {
  id: number;
  name: string;
  salary: number;
  value: number; // a simple metric for player quality
}

export interface DraftPick {
  round: number;   // e.g. 1 or 2
  year: number;    // e.g. 2026
  value: number;   // approximate trade value
}

export interface Team {
  id: number;
  name: string;
  roster: Player[];
}

export interface TradeProposal {
  fromTeam: Team;
  toTeam: Team;
  playersFrom: Player[];
  playersTo: Player[];
  picksFrom?: DraftPick[];
  picksTo?: DraftPick[];
}
