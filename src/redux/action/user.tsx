import { TuserDetails } from '../../types/types';
import { FETCH_USER_DETAILS } from '../constants';



export const fetchUser = (userDetails: TuserDetails) => {
    return (dispatch: Function) => {
        dispatch({
            type: FETCH_USER_DETAILS,
            userDetails
        })
    }
}