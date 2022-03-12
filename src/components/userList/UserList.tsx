import React, {FC} from 'react';
import {IUser} from "../../types/types";
import UserItem from "../userItem/UserItem";
import styles from './UserList.module.css'
import {useAppSelector} from "../hooks/redux";
import {useSortDate} from "../hooks/useSortDate";

interface IUserListProps {
    users: IUser[]
}

const UserList: FC<IUserListProps> = ({users}) => {
    const { filter } = useAppSelector(state => state.userReducer)
    let usersFiltered = useSortDate(filter, users)
    return (
        <div>
            <div className={styles.list}>Список пользователей</div>
            {usersFiltered.map(user =>
                <UserItem key={user.id} user={user} />
            )}
            <div className={styles.length}>Найдено {users.length} пользователей</div>
        </div>
    );
};

export default UserList;