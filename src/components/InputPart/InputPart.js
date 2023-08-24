import styles from "./InputPart.module.css";
import { getData } from "../../lib/fetchData";
import { useState } from "react";

export default function InputPart({ setShortLink }) {
  const [enteredLink, setEnteredLink] = useState("");
  
  const hedlerChange = (e) => {
    setEnteredLink(e.target.value);
  };

  const cutLink = async () => {
    const readyLink = await getData(enteredLink);
    setShortLink(readyLink);
  };

  return (
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
        className={
          !enteredLink
            ? styles.cut__link__button__disabled
            : styles.cut__link__button__active
        }
      >
        Сократить
      </button>
    </div>
  );
}
