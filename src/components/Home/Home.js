import styles from "./Home.module.css"
import Container from "../Container/Container"
import { useState } from "react"
import { IoMdCut } from "react-icons/io"

function Home () {
    const [ link, setLink ] = useState('')

    const hedlerChange = (e) => {
        setLink(e.target.value)
    }

    return (
        <Container>
            <div className={styles.main_page}>
                <div className={styles.main_page__title}>
                    <div className={styles.title__icon}><IoMdCut /></div>
                    <h1 className={styles.title__text}>Кликер</h1>
                </div>
                <p className={styles.main_page__subtitle}>Помогите клиентам быстро найти вашу страницу в интернете. Благодаря короткой ссылке клиентам не придётся видеть длинные url-адреса, занимающие много места.</p>
                <div className={styles.cut__link}>
                    <input onChange={hedlerChange} value={link} type="text" className={styles.cut__link__input} />
                    <button className={styles.cut__link__button}>Сократить</button>
                </div>
                <div className={styles.ready__link}>
                    <button className={styles.ready__link__transition}>...</button>
                    <button className={styles.ready__link__copy}>Копировать</button>
                </div>
            </div>
        </Container>
    )
}
export default Home;