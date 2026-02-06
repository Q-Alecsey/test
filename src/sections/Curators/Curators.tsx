
import styles from './Curators.module.scss';

import FormCurator from '@components/FormCurator/FormCurator.tsx';

const Curators = () => {
    return (
        <section className={clsx(styles.section)} id="curators">
            <div className={clsx(styles.container, "container")}>
                <h2 className={styles.title}>
                    Готовы разгрузить своих кураторов?
                </h2>
                <p className={styles.subtitle}>
                    Оставьте заявку на закрытое пилотное тестирование или получите доступ к документации API.
                </p>

                <div className={styles.formWrapper}>
                    <FormCurator />
                </div>
            </div>
        </section>
    );
};

export default Curators;