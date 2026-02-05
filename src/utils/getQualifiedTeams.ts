import { buildTable } from "./buildTable";
import type { Group } from "../data/editionStandingsData";
import type { Round } from "../types/match";

export const getQualifiedTeams = (
    group: Group,
    rounds: Round[]
) => {
    const table = buildTable(group.teams, rounds)

    return table.slice(0, 4)
}