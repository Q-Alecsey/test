
import styles from './Login.module.scss';

import InputForLog from "@components/InputForLog/InputForLog.tsx";

import {useForm, type SubmitHandler} from "react-hook-form"

import {z} from 'zod'
import {zodResolver} from "@hookform/resolvers/zod";

const validationSchema = z.object({
    email: z.string().email("Неверный формат email"),
    password: z.string().min(8, "Пароль слишком короткий").max(16, "Пароль слишком длинный"),
});

type FormValues = z.infer<typeof validationSchema>;

export const Login = () => {

    const {register, handleSubmit, formState:{errors}} = useForm<FormValues>({mode:"onBlur",reValidateMode: "onBlur", resolver: zodResolver(validationSchema)});

    const onSubmit:SubmitHandler<FormValues> = (data) => {
        console.log(data);
    }

    return (
        <form className={styles.authForm} onSubmit={handleSubmit(onSubmit)}>
            <InputForLog type={"email"} placeholder={'example@gmail.com'} labelText={"Ваш email*"} {...register("email")} error={errors.email}/>
            <InputForLog type={"password"} placeholder={'********'} labelText={"Ваш пароль*"} {...register("password")} error={errors.password}/>

            <button type="submit" className={styles.submitBtn}>
                Получить доступ
            </button>
        </form>
    );
};

export default Login;