import { UiBreakPoints } from 'utils/constants/uiBreakPoints';

type payloadType= keyof UiBreakPoints;
export type breakPoints={
    breakPoint:keyof UiBreakPoints
}
export type breakPointsActionType={
    type:string;
    payload:payloadType
}