
import styles from './TaskChecker.module.scss';

import AIresult from '@sections/AIresult/AIresult.tsx'
import FormTaskChecker from '@sections/FormTaskChecker/FormTaskChecker.tsx'

const TaskChecker = () => {
    return (
        <div className={styles.wrapper} id="taskChecker">
            <div className="container">
                <div className={styles.card}>
                    <div className={styles.header}>
                        <h1 className={styles.title}>Проверка задания</h1>
                        <div className={styles.separator}></div>
                    </div>

                    <FormTaskChecker />
                </div>

                <AIresult />
            </div>
        </div>
    );
};

export default TaskChecker;