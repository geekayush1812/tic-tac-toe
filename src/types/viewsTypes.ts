export type playgroundProps = {
    className?: string;
}
export type leaderboardProps = {
    className?: string;
}
export type leaderboardUser = {
    name: string;
    lostMatches: number;
    wonMatches: number;
}
export type leaderboardUserDetails = Array<leaderboardUser> | null;