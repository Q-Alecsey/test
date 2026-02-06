
import s from './Footer.module.scss';

import {scrollToElement} from "@/utils/ts/scrollTo.ts";

export const Footer = () => {
    return (
        <footer className={clsx(s.footer)}>
            <div className={clsx(s.container)}>
                <div className={clsx(s.mainContent)}>
                    <div className={clsx(s.column, s.infoColumn)}>
                        <div className={clsx(s.logoWrapper)}>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className={clsx(s.logoIcon)}
                            >
                                <circle cx="12" cy="12" r="10" stroke="#107e3e" strokeWidth="2" />
                                <path
                                    d="M8 12L11 15L16 9"
                                    stroke="#107e3e"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <span className={clsx(s.logoText)}>bioAI</span>
                        </div>
                        <p className={clsx(s.description)}>
                            Интеллектуальная система проверки заданий ЕГЭ по биологии для онлайн-школ и репетиторов.
                        </p>
                    </div>

                    <div className={clsx(s.column)}>
                        <h3 className={clsx(s.columnTitle)}>КОНТАКТЫ</h3>
                        <ul className={clsx(s.list)}>
                            <li className={clsx(s.listItem)}>
                                <span className={clsx(s.iconWrapper)}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="#7c8db5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                </span>
                                                <a href="mailto:biologyforyou.irinasmirnova@gmail.com" className={clsx(s.link)}>
                                                    biologyforyou.irinasmirnova@gmail.com
                                                </a>
                                            </li>
                                            <li className={clsx(s.listItem)}>
                                <span className={clsx(s.iconWrapper)}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="#e91e63" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                </span>
                                <a href="tel:+79659061988" className={clsx(s.link)}>
                                    +7 (965) 906-19-88
                                </a>
                            </li>
                            <li className={clsx(s.listItem)}>
                <span className={clsx(s.iconWrapper)}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#e91e63" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </span>
                                <span className={clsx(s.text)}>СПб, Аккуратова, 2</span>
                            </li>
                        </ul>
                    </div>

                    <div className={clsx(s.column)}>
                        <h3 className={clsx(s.columnTitle)}>ПОЛЕЗНЫЕ ССЫЛКИ</h3>
                        <ul className={clsx(s.list)}>
                            <li className={clsx(s.listItem)}>
                                <a className={clsx(s.link)}>Документация API</a>
                            </li>
                            <li className={clsx(s.listItem)}>
                                <a className={clsx(s.link)} data-link="faq" onClick={scrollToElement} >Частые вопросы (FAQ)</a>
                            </li>
                            <li className={clsx(s.listItem)}>
                                <a className={clsx(s.link)}>Методические материалы</a>
                            </li>
                            <li className={clsx(s.listItem)}>
                                <a className={clsx(s.link)}>Техподдержка</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={clsx(s.copyright)}>
                    <p>© 2026 bioAI. Разработано с экспертами ЕГЭ. Все права защищены.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;