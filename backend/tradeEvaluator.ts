import { TradeProposal, Player, DraftPick } from "./models";

function summarizePlayers(players: Player[]): string {
  if (!players || players.length === 0) return "no players";
  return players.map(p => p.name).join(", ");
}

function summarizePicks(picks: DraftPick[]): string {
  if (!picks || picks.length === 0) return "no picks";
  return picks.map(p => `${p.year} Round ${p.round}`).join(", ");
}

export function evaluateTrade(trade: TradeProposal) {
  const valueFrom =
    trade.playersFrom.reduce((sum, p) => sum + p.value, 0) +
    (trade.picksFrom?.reduce((sum, pick) => sum + pick.value, 0) || 0);

  const salaryFrom = trade.playersFrom.reduce((sum, p) => sum + p.salary, 0);

  const valueTo =
    trade.playersTo.reduce((sum, p) => sum + p.value, 0) +
    (trade.picksTo?.reduce((sum, pick) => sum + pick.value, 0) || 0);

  const salaryTo = trade.playersTo.reduce((sum, p) => sum + p.salary, 0);

  const teamANet = valueTo - salaryTo;
  const teamBNet = valueFrom - salaryFrom;
  const balanceDiff = Math.abs(teamANet - teamBNet);

  const grade = (net: number, balance: number) => {
    if (net > 20 && balance < 10) return "A";
    if (net > 10) return "B";
    if (net > 0) return "C";
    return "D";
  };

  return {
    summary: {
      teamAReceives: `${summarizePlayers(trade.playersTo)}; ${summarizePicks(
        trade.picksTo || []
      )}`,
      teamBReceives: `${summarizePlayers(trade.playersFrom)}; ${summarizePicks(
        trade.picksFrom || []
      )}`
    },
    teamA: grade(teamANet, balanceDiff),
    teamB: grade(teamBNet, balanceDiff),
    details: {
      teamA: {
        valueReceived: valueTo,
        salaryTaken: salaryTo,
        netGain: teamANet
      },
      teamB: {
        valueReceived: valueFrom,
        salaryTaken: salaryFrom,
        netGain: teamBNet
      },
      fairness: balanceDiff < 10 ? "Balanced" : "Lopsided"
    }
  };
}
