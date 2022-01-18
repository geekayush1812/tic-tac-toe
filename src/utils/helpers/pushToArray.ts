export const pushToArray=(array:number[],value:number)=>{
    const newArray=[...array];
    newArray.push(value);
    return newArray;
}