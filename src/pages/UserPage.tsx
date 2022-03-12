import React, {FC, useEffect} from 'react';
import UserList from "../components/userList/UserList";
import {useAppDispatch, useAppSelector} from "../components/hooks/redux";
import {fetchUsers} from "../components/store/reducers/ActionCreators";

const UserPage: FC = () => {
    const dispatch = useAppDispatch()
    const {users, error, isLoading} = useAppSelector(state => state.userReducer)

    useEffect(() => {
        dispatch(fetchUsers(''))
    }, [])

    return (
        <div>
            {isLoading && <h1>...Loading</h1>}
            {error && <h1>{error}</h1>}
            <UserList users={users}/>
        </div>
    );
};

export default UserPage;