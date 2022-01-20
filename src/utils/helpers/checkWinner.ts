import { possibleWinningSequence } from 'utils/constants';

const checkWinner = (crossOrNoughtSequence:number[]) => {
    const winCount = 3;
    const hasMinLengthSequence = crossOrNoughtSequence.length >= winCount;
    if(hasMinLengthSequence){
        for(let possibleWinTuple of possibleWinningSequence){
            let itemPresentInSequence = 0 ;
            for(let tupleItem of possibleWinTuple){
                if(crossOrNoughtSequence.includes(tupleItem)) { itemPresentInSequence++; }
            }
            const hasWon = itemPresentInSequence === winCount;
            if(hasWon){
                return possibleWinTuple;
            }
        }
    }
}
export default checkWinner;
