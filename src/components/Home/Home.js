import styles from "./Home.module.css";
import Container from "../Container/Container";
import { getData } from "../../lib/fetchData";

import { useState } from "react";
import { IoMdCut } from "react-icons/io";
import { ImLink } from "react-icons/im";
import { useClipboard } from "use-clipboard-copy";

function Home() {
  const [enteredLink, setEnteredLink] = useState("");
  const [shortLink, setShortLink] = useState("");
  const [isLinkCopied, setIsLinkCopied] = useState(false);

  const clipboard = useClipboard();

  const hedlerChange = (e) => {
    setEnteredLink(e.target.value);
  };

  const cutLink = async () => {
    const readyLink = await getData(enteredLink);
    setShortLink(readyLink);
  };

  const goToLink = () => {
    console.log(shortLink);
    window.location.href = shortLink;
  };
  
  const copyLink = () => {
    clipboard.copy(shortLink);
    setIsLinkCopied(!isLinkCopied);
  };

  return (
    <Container>
      <div className={styles.main_page}>
        <div className={styles.main_page__title}>
          <div className={styles.title__icon}>
            <IoMdCut />
          </div>
          <h1 className={styles.title__text}>Кликер</h1>
        </div>
        <p className={styles.main_page__subtitle}>
          Помогите клиентам быстро найти вашу страницу в интернете. Благодаря
          короткой ссылке клиентам не придётся видеть длинные url-адреса,
          занимающие много места.
        </p>
        <div className={styles.cut__link}>
          <input
            onChange={hedlerChange}
            value={enteredLink}
            type="text"
            className={styles.cut__link__input}
          />
          <button
            disabled={!enteredLink}
            onClick={cutLink}
            className={!enteredLink ? styles.cut__link__button__disabled : styles.cut__link__button}
          >
            Сократить
          </button>
        </div>
        <div
          className={
            shortLink
              ? `${styles.ready__link}`
              : `${styles.link__display__none}`
          }
        >
          <button className={styles.ready__link__transition} onClick={goToLink}>
            <ImLink /> {shortLink.slice(8)}
          </button>
          <button className={styles.ready__link__copy} onClick={copyLink}>
            {isLinkCopied ? "Готово" : "Копировать"}
          </button>
        </div>
      </div>
    </Container>
  );
}
export default Home;
