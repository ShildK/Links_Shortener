import styles from "./Title.module.css";
import { IoMdCut } from "react-icons/io";

export default function Title() {
  return (
    <div>
      <div className={styles.title}>
        <div className={styles.title__icon}>
          <IoMdCut />
        </div>
        <h1 className={styles.title__text}>Кликер</h1>
      </div>
      <p className={styles.subtitle}>
        Помогите клиентам быстро найти вашу страницу в интернете. Благодаря
        короткой ссылке клиентам не придётся видеть длинные url-адреса,
        занимающие много места.
      </p>
    </div>
  );
}
