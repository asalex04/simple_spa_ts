import React from 'react';
import {yupResolver} from '@hookform/resolvers/yup';
import {SubmitHandler, useForm} from "react-hook-form";
import * as yup from 'yup'
import styles from './Form.module.css'
import {IForm} from "../../types/types";
import {useAppSelector} from "../hooks/redux";

const schema = yup.object({
    name: yup.string().required(),
    username: yup.string().required(),
    email: yup.string().email().required(),
    street: yup.string().required(),
    city: yup.string().required(),
    zipcode: yup.string().required(),
    phone: yup.string().required(),
    website: yup.string().required(),
}).required();

export default function Form(props: IForm) {
    const {write} = useAppSelector(state => state.userReducer)
    const {register, handleSubmit, formState: {errors}} = useForm<IForm>({
        resolver: yupResolver(schema),
        reValidateMode: "onChange"
    });
    const onSubmit: SubmitHandler<IForm> = data => console.log(data);

    return (
        <form className={styles.props} id='form' onSubmit={handleSubmit(onSubmit)}>
            <div>
                <div><label>Name</label></div>
                <input className={errors.name ? styles.border : ''}
                       defaultValue={props.name}
                       {...register("name")}
                       readOnly={write}
                />
            </div>
            <div>
                <div><label>User name</label></div>
                <input className={errors.username ? styles.border : ''}
                       defaultValue={props.username}
                       {...register("username")}
                       readOnly={write}
                />
            </div>
            <div>
                <div><label>E-mail</label></div>
                <input className={errors.email ? styles.border : ''}
                       defaultValue={props.email}
                       {...register("email")}
                       readOnly={write}
                />
            </div>
            <div>
                <div><label>Street</label></div>
                <input className={errors.street ? styles.border : ''}
                       defaultValue={props.street}
                       {...register("street")}
                       readOnly={write}
                />
            </div>
            <div>
                <div><label>city</label></div>
                <input className={errors.city ? styles.border : ''}
                       defaultValue={props.city}
                       {...register("city")}
                       readOnly={write}
                />
            </div>
            <div>
                <div><label>Zip code</label></div>
                <input className={errors.zipcode ? styles.border : ''}
                       defaultValue={props.zipcode}
                       {...register("zipcode")}
                       readOnly={write}
                />
            </div>
            <div>
                <div><label>Phone</label></div>
                <input className={errors.phone ? styles.border : ''}
                       defaultValue={props.phone}
                       {...register("phone")}
                       readOnly={write}
                />
            </div>
            <div>
                <div><label>Website</label></div>
                <input className={errors.website ? styles.border : ''}
                       defaultValue={props.website}
                       {...register("website")}
                       readOnly={write}
                />
            </div>
            <div>
                <div><label>Comment</label></div>
                <textarea className={styles.textarea} {...register("comment")} />
            </div>
        </form>
    );
}

