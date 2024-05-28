import { SECONDS_PER_HOUR, SECONDS_PER_MINUTE } from "../contants";

export function stopWatchTime(seconds: number){
    const h = Math.floor(seconds / SECONDS_PER_HOUR);
    const m = Math.floor(seconds%SECONDS_PER_HOUR/SECONDS_PER_MINUTE);
    const s = (seconds % 60).toFixed(2);;

    return `${String(h).padStart(2,"0")}:${String(m).padStart(2,"0")}:${String(s).padStart(5, "0")}`
}