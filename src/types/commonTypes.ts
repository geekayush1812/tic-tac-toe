import { currentPlayer } from './reducerTypes/playgroundReducerTypes';
import { leaderboardUser } from './viewsTypes';

export type BackdropProps = {
    children: React.ReactNode;
    className?: string;
}
export type blockType = "empty" | "nought" | "cross";
export type GameBoardGridBlockProps = {
    blockType : blockType;
    gridIndex: number;
}
export type HeightBoundContainerProps = {
    children?: React.ReactNode;
    className?: string;
}
export type UserCardProps = {
    user:leaderboardUser
}
export type getCurrentPlayerGridNotation = (currentPlayer:Exclude<currentPlayer,undefined>) => number;