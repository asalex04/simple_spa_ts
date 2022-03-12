import {IUser} from "../../../types/types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type filterType = 'city' | 'company'

interface UserState {
    users: IUser[]
    isLoading: boolean
    error: string
    filter: filterType
    write: boolean
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: '',
    filter: "city",
    write: true
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        usersFetching(state) {
            state.isLoading = true
        },
        usersFetchingSuccess(state, action: PayloadAction<IUser[]>) {
            state.error = ''
            state.isLoading = false
            state.users = action.payload
        },
        usersFetchingError(state, action:PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        },
        setFilter(state, action: PayloadAction<filterType>){
            state.filter = action.payload
        },
        setWrite(state){
            state.write = false
        }
    }
})

export default userSlice.reducer
export const {setFilter, usersFetchingError, usersFetchingSuccess, usersFetching, setWrite} = userSlice.actions