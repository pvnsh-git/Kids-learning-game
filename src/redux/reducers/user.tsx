import {FETCH_USER_DETAILS} from '../constants';

export const userDetails = (state=[], action: any) => {
    const { type } = action;
    switch (type) {
        case FETCH_USER_DETAILS:
            const newState = [
                ...state, action.userDetails
            ]
            return newState;
                
    
        default:
            return state;
    }

}