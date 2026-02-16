
import styles from './FormCurator.module.scss';

import InputForLog from "@components/InputForLog/InputForLog.tsx"

import {useForm, type SubmitHandler} from "react-hook-form";

import {z} from "zod";
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
    nameOnlineSchool: z.string().trim().min(1, "Это обязательное поле"),
    linkOnlineSchool: z.string().trim().min(1, "Это обязательное поле"),
    phone: z.string().regex(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/, "Неверный формат номера телефона"),
    telegram: z.string()
        .trim()
        .or(z.literal(''))
        .refine((val) => val.startsWith("@"), {
            message: "Никнейм должен начинаться с @"}),
});

type FormValues = z.infer<typeof validationSchema>;

export const FormCurator = () => {

    const {register, handleSubmit, formState:{errors}} = useForm<FormValues>({mode:"onBlur",reValidateMode: "onBlur", resolver: zodResolver(validationSchema)});

    const onSubmit:SubmitHandler<FormValues> = (data) => {
        console.log(data);
    }

    return (
        <form className={styles.form}>
            <InputForLog type={"text"} placeholder={'Иванов Иван Иванович'} {...register("FIO")} error={errors.FIO}/>
            <InputForLog type={"text"} placeholder={'example@gmail.com'} {...register("email")} error={errors.email}/>
            <InputForLog type={"text"} placeholder={'Название онлайн-школы'} {...register("nameOnlineSchool")} error={errors.nameOnlineSchool}/>
            <InputForLog type={"text"} placeholder={'Ссылка на онлайн-школу'} {...register("linkOnlineSchool")} error={errors.linkOnlineSchool}/>
            <InputForLog type={"text"} placeholder={'Ваш телефон'} {...register("phone")} error={errors.phone}/>
            <InputForLog type={"text"} placeholder={'Telegram'} {...register("telegram")} error={errors.telegram}/>

            <button className={styles.button}>Записаться на демо</button>
        </form>
    );
};

export default FormCurator;