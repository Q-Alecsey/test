
import styles from './RegisterStudent.module.scss';

import InputForLog from "@components/InputForLog/InputForLog.tsx";

import {useForm, type SubmitHandler} from "react-hook-form"

import {z} from 'zod'
import {zodResolver} from "@hookform/resolvers/zod";

const validationSchema = z.object({
    FIO: z
        .string()
        .trim()
        .min(1, "Поле обязательно для заполнения")
        .regex(/^[а-яА-ЯёЁ\s-]+$/, "ФИО должно содержать только кириллицу")
        .refine(
            (val) => val.split(/\s+/).length >= 2,
            { message: "Введите Фамилию и Имя полностью" }
        )
        .refine(
            (val) => val.split(/\s+/).every((word) => /^[А-ЯЁ]/.test(word)),
            { message: "Каждое слово должно начинаться с заглавной буквы" }
        ),
    email: z.string().email("Неверный формат email"),
    password: z.string().min(8, "Пароль слишком короткий").max(16, "Пароль слишком длинный"),
    phone: z.string().regex(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/, "Неверный формат номера телефона"),
    telegram: z.string()
        .trim()
        .optional()
        .or(z.literal(''))
        .refine((val) => !val || val.startsWith("@"), {
            message: "Никнейм должен начинаться с @"}),
});

type FormValues = z.infer<typeof validationSchema>;

export const RegisterStudent = () => {

    const {register, handleSubmit, formState:{errors}} = useForm<FormValues>({mode:"onBlur",reValidateMode: "onBlur", resolver: zodResolver(validationSchema)});

    const onSubmit:SubmitHandler<FormValues> = (data) => {
        console.log(data);
    }

    return (
        <form className={styles.authForm} onSubmit={handleSubmit(onSubmit)}>
            <InputForLog type={"text"} placeholder={'Иванов Иван Иванович'} labelText={"ФИО*"} {...register("FIO")} error={errors.FIO}/>
            <InputForLog type={"email"} placeholder={'example@gmail.com'} labelText={"Ваш email*"} {...register("email")} error={errors.email}/>
            <InputForLog type={"password"} placeholder={'********'} labelText={"Ваш пароль*"} {...register("password")} error={errors.password}/>
            <InputForLog type={"tel"} placeholder={'+79031111111'} labelText={"Ваш телефон*"} {...register("phone")} error={errors.phone}/>
            <InputForLog type={"text"} placeholder={'@Ivanova_Marya'} labelText={"Ваш телеграм"} {...register("telegram")} error={errors.telegram}/>

            <button type="submit" className={styles.submitBtn}>
                Получить доступ
            </button>
        </form>
    );
};

export default RegisterStudent;