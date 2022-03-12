import React, {FC, useState} from 'react';
import {IUser} from "../types/types";
import {useParams} from "react-router-dom";
import styles from './UserProfilePage.module.css'
import {Button} from "../components/button/Button";
import {useAppDispatch, useAppSelector} from "../components/hooks/redux";
import Form from "../components/card/Form";
import {setWrite} from "../components/store/reducers/UserSlice";

const UserProfilePage: FC = () => {
    const [color, setColor] = useState('grey')
    const dispatch = useAppDispatch()
    const params = useParams()
    const {users} = useAppSelector(state => state.userReducer)
    const user: IUser = users.filter(user => user.id === Number(params.id))[0]

    const handleClick = () => {
        setColor('green')
        dispatch(setWrite())
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                Профиль пользователя
                <Button onClick={handleClick} className={styles.button} appearance={'primary'}>
                    Редактировать
                </Button>
            </div>
            <div className={styles.card}>
                <Form name={user.name}
                      username={user.username}
                      city={user.address.city}
                      email={user.email}
                      phone={user.phone}
                      street={user.address.street}
                      website={user.website}
                      zipcode={user.address.zipcode}
                      comment={user.comment}/>
            </div>
            <Button form='form' className={styles.send} appearance={color}>Отправить</Button>
        </div>
    );
};

export default UserProfilePage;