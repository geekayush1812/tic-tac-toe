import { gameResult } from 'types/reducerTypes/appReducerTypes';

export const getGameResultGreet = (gameResult:gameResult) => {
    if(gameResult){
        switch(gameResult){
            case 'draw':
                return "It's a Draw!";
            case 'winner':
                return (winnerName:string)=>`${winnerName} Won!!`
        }
    }
}