export type selectedTab = "playground" | "leaderboard";
export type app = {
    selectedTab: selectedTab;
}
export type appAction = {
    type: string;
    payload?: any
}