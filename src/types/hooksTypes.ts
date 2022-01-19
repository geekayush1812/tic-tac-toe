export type UseClientHeight = (ref:React.RefObject<HTMLElement>,initialValue:string) => string;
export type UseLocalStorageReturnType<T> = [T,(value:T)=>void]