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