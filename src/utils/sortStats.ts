import type { StatItem } from "../types/stats";

export const sortStats = (data: StatItem[]) => {
  return [...data].sort((a,b) => {
    if(b.value !== a.value){
        return b.value - a.value
    }

    return a.player.localeCompare(b.player)
  })
}

export default sortStats