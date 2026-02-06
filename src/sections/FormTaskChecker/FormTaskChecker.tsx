
import styles from './FormTaskChecker.module.scss';

import TextAreaChecker from "@components/TextAreaChecker/TextAreaChecker.tsx";

import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm, type SubmitHandler} from 'react-hook-form';

const schema = z.object({
    task: z.string().min(1, 'Это поле обязательно для заполнения'),
    keys: z.string().min(1, 'Это поле обязательно для заполнения'),
    studentAnswer: z.string().min(1, 'Это поле обязательно для заполнения'),
});

type FormValues = z.infer<typeof schema>;

const FormTaskChecker = () => {

    const {register, handleSubmit, formState:{errors}} = useForm<FormValues>({mode:"onBlur",reValidateMode: "onBlur", resolver: zodResolver(schema)});

    const onSubmit : SubmitHandler<FormValues> = (data) =>{

        console.log("FormTaskChecker")
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <TextAreaChecker labelText="Условие задачи (часть 2 ЕГЭ)"
                             placeholderText={"Введите текст задания из второй части ЕГЭ по биологии..."}
                             svgType='doc'
                             {...register("task")} error={errors.task}
            />

            <div className={styles.row}>
                <TextAreaChecker labelText="Ключи"
                                 placeholderText="Введите эталонный ответ согласно критериям ФИПИ..."
                                 svgType='key'
                                 {...register("keys")} error={errors.keys} borderActive={true}
                />

                <TextAreaChecker labelText="Ответ ученика"
                                 placeholderText="Вставьте ответ ученика для проверки..."
                                 svgType='human'
                                 {...register("studentAnswer")} error={errors.studentAnswer}
                />

            </div>

            <button type="submit" className={styles.checkButton}>
                <span className={styles.btnIcon}>🤖</span>
                Проверить с помощью ИИ
            </button>
        </form>
    );
};

export default FormTaskChecker;
