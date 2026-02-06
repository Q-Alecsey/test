
import { useState } from 'react';
import s from './Faq.module.scss';

interface FaqItem {
    id: number;
    question: string;
    answer: string;
}

const faqData: FaqItem[] = [
    {
        id: 1,
        question: 'Это “чат-бот” или действительно проверка по критериям?',
        answer: 'Мы отдаём не общий текст, а структурированный “лист проверки”: балл, пункты ключей (зачтено/нет), ошибки и комментарий. Балл считается алгоритмически по структурированному выходу.',
    },
    {
        id: 2,
        question: 'Как вы снижаете риск “галлюцинаций”?',
        answer: 'Выход фиксирован в JSON-формате, валидируется, и затем из него строится финальный отчёт. Это уменьшает произвольные ответы и облегчает контроль качества.',
    },
    {
        id: 3,
        question: 'Можно ли проверять ответы по фото/сканам?',
        answer: 'Да: в демо уже добавлено поле прикрепления изображений. В проде это подключается как один из входных каналов ответа.',
    },
    {
        id: 4,
        question: 'Сколько стоит и как считается?',
        answer: 'Ориентир — ~2,5 ₽ за проверку (с потенциалом снижения за счёт оптимизаций). Для B2B — тариф зависит от объёма и SLA.',
    },
    {
        id: 5,
        question: 'Сколько времени занимает внедрение?',
        answer: 'Типовой сценарий: 1–3 дня на пилот (эндпоинт + формат отчёта), дальше — расширение под ваш UX и аналитику.',
    },
];

const Faq = () => {
    const [openId, setOpenId] = useState<number | null>(null);

    const toggleItem = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className={s.root} id="faq">
            <div className="container">
                <h2 className={s.header}>FAQ для принятия решения</h2>

                {faqData.map((item) => {
                    const isOpen = openId === item.id;

                    return (
                        <div key={item.id} className={s.item}>
                            <button
                                className={s.trigger}
                                onClick={() => toggleItem(item.id)}
                                type="button"
                                aria-expanded={isOpen}
                            >
                                <span className={clsx(s.icon, isOpen && s.isOpen)}>▼</span>
                                {item.question}
                            </button>

                            <div
                                className={clsx(s.gridWrapper, isOpen && s.isOpen)}
                                aria-hidden={!isOpen}
                            >
                                <div className={s.contentInner}>
                                    <p className={s.answer}>{item.answer}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Faq;