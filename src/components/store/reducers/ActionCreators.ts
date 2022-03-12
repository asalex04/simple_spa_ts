import axios from "axios";
import {AppDispatch} from "../store";
import {IUser} from "../../../types/types";
import {usersFetching, usersFetchingError, usersFetchingSuccess} from "./UserSlice";

export const fetchUsers = (id?: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(usersFetching())
        const response = await axios.get<IUser[]>(`https://jsonplaceholder.typicode.com/users/${id}`)
        dispatch(usersFetchingSuccess(response.data))
    } catch (e) {
        // @ts-ignore
        dispatch(usersFetchingError(e.message))
    }
}