import { LOGIN_SUCCESS } from "../constants/todoTypes"

export const saveUser = (user: object) => {
    return (dispatch: Function) => {
        dispatch({
            type: LOGIN_SUCCESS,
            user
        })
    }
}