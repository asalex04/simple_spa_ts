import React, {FC} from 'react';
import {IUser} from "../../types/types";
import styles from './UserItem.module.css'
import {Button} from "../button/Button";
import {useNavigate} from "react-router-dom";


interface IUserItemProps {
    user: IUser
}

const UserItem: FC<IUserItemProps> = ({user}) => {
    const navigate = useNavigate()

    const handleClick = (id: number) => {
        navigate(`/${id}`)
    }

    return (
        <div className={styles.card}>
            <div className={styles.fio}><span>ФИО:</span> {user.name}</div>
            <div className={styles.city}><span>город:</span> {user.address.city}</div>
            <div className={styles.company}><span>компания:</span> {user.company.name}</div>
            <Button
                className={styles.button}
                appearance={"ghost"}
                onClick={() => {handleClick(user.id)}}
            >
                Подробнее
            </Button>
        </div>
    );
};

export default UserItem;