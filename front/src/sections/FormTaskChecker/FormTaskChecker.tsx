
import styles from './FormTaskChecker.module.scss';

import TextAreaChecker from "@components/TextAreaChecker/TextAreaChecker.tsx";
import type { GradeResult } from '@/types/gradeResult';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from 'react-hook-form';

const schema = z.object({

    line: z.string().min(1, 'Это поле обязательно для заполнения'),
    task_text: z.string().min(1, 'Это поле обязательно для заполнения'),
    keys_text: z.string().min(1, 'Это поле обязательно для заполнения'),
    student_answer_text: z.string().min(1, 'Это поле обязательно для заполнения'),
});

const API_URL = import.meta.env.DEV
    ? 'http://localhost:8000/api/grade'
    : '/api/grade';
const API_KEY = "g1kQOlzWol3XtEk6T8oj4XoxZrOI85DEccyA_WKqcpcKWOTn70Xc6Jdj34LXchbd";

type FormValues = z.infer<typeof schema>;

interface FormTaskCheckerProps {
    onResult: (data: GradeResult) => void;
}

const FormTaskChecker = ({ onResult }: FormTaskCheckerProps) => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ mode: "onBlur", reValidateMode: "onBlur", resolver: zodResolver(schema) });

    const onSubmit: SubmitHandler<FormValues> = async (data) => {

        const JSONrequest: object = {
            "line": Number(data.line),
            "task_id": "smoke-test-22",
            "task_text": data.task_text,
            "keys_text": data.keys_text,
            "student_answer_text": data.student_answer_text,
            "model": "gpt-5.2",
            "few_shot_variant": "v1",
            "store": false,
            "max_task_score": 3,
            "credited_threshold_1_to_5": 4,
            "max_output_tokens": 20000
        }


        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': `Bearer ${API_KEY}`,
            },
            body: JSON.stringify(JSONrequest),
        });

        const finalResponse = await response.json();
        onResult(finalResponse);
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>

            <div>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>
                        {numberSVG()}
                        Линия задания
                    </label>
                    <input
                        type="text"
                        className={styles.input}
                        placeholder="27"
                        {...register("line")}
                    />
                </div>
                {errors.line && <span className={styles.error}>{errors.line.message}</span>}
            </div>


            <TextAreaChecker labelText="Условие задачи (часть 2 ЕГЭ)"
                placeholderText={"Введите текст задания из второй части ЕГЭ по биологии..."}
                svgType='doc'
                {...register("task_text")} error={errors.task_text}
            />

            <div className={styles.row}>
                <TextAreaChecker labelText="Ключи"
                    placeholderText="Введите эталонный ответ согласно критериям ФИПИ..."
                    svgType='key'
                    {...register("keys_text")} error={errors.keys_text} borderActive={true}
                />

                <TextAreaChecker labelText="Ответ ученика"
                    placeholderText="Вставьте ответ ученика для проверки..."
                    svgType='human'
                    {...register("student_answer_text")} error={errors.student_answer_text}
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

const numberSVG = () => (
    <svg className={styles.labelIcon} viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.74 15.68l2.58-10h2.15l-2.58 10H7.74zm5.16-10h2.15l-2.58 10h-2.15l2.58-10zM5 8h14v2H5V8zm0 6h14v2H5v-2z" />
    </svg>
);
