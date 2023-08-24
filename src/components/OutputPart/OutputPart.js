import styles from "./OutputPart.module.css";

import { useState } from "react";
import { useClipboard } from "use-clipboard-copy";

import { ImLink } from "react-icons/im";

export default function OutputPart({ shortLink }) {
  const [isLinkCopied, setIsLinkCopied] = useState(false);
  const clipboard = useClipboard();

  const goToLink = () => {
    console.log(shortLink);
    window.location.href = shortLink;
  };

  const copyLink = () => {
    clipboard.copy(shortLink);
    setIsLinkCopied(!isLinkCopied);
  };

  return (
    <div className={shortLink ? `${styles.ready__link}` : `${styles.link__display__none}`}>
      <button className={styles.ready__link__transition} onClick={goToLink}>
        <ImLink /> {shortLink.slice(8)}
      </button>
      <button className={styles.ready__link__copy} onClick={copyLink}>
        {isLinkCopied ? "Готово" : "Копировать"}
      </button>
    </div>
  );
}
