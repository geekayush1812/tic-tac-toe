export type BackdropProps = {
    children:React.ReactNode;
    className?:string;
}
export type blockType = "empty" | "nought" | "cross";
export type GameBoardGridBlockProps = {
    blockType : blockType
}