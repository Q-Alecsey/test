
import styles from './TaskChecker.module.scss';

import { useState } from 'react';
import type { GradeResult } from '@/types/gradeResult';

import AIresult from '@sections/AIresult/AIresult.tsx'
import FormTaskChecker from '@sections/FormTaskChecker/FormTaskChecker.tsx'

const TaskChecker = () => {
    const [result, setResult] = useState<GradeResult | null>(null);

    return (
        <div className={styles.wrapper} id="taskChecker">
            <div className="container">
                <div className={styles.card}>
                    <div className={styles.header}>
                        <h1 className={styles.title}>Проверка задания</h1>
                        <div className={styles.separator}></div>
                    </div>

                    <FormTaskChecker onResult={setResult} />
                </div>

                {result && <AIresult data={result} />}
            </div>
        </div>
    );
};

export default TaskChecker;