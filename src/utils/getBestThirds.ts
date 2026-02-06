import { buildTable } from "./buildTable";
import type { Group } from "../data/editionStandingsData";
import type { Round } from "../types/match";

export const getBestThirds = (
    groups: Group[],
    rounds: Round[],
    amount: number
) => {
    const thirds = groups.map(group => buildTable(group.teams, rounds) [2]).filter(Boolean)

    thirds.sort((a, b) => b.P - a.P || b.SG - a.SG || b.GM - a.GM)

    return thirds.slice(0, amount)
}