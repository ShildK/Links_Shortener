import styles from "./ShortLinkCard.module.css";

import { useState } from "react";
import { useClipboard } from "use-clipboard-copy";

import { ImLink } from "react-icons/im";

export default function OutputPart({ shortLink }) {
  const [isLinkCopied, setIsLinkCopied] = useState(false);
  const clipboard = useClipboard();

  const copyLink = () => {
    clipboard.copy(shortLink);
    setIsLinkCopied(!isLinkCopied);
  };

  return (
    <div className={shortLink ? `${styles.ready__link}` : `${styles.link__display__none}`}>
      <a className={styles.ready__link__transition} target="_blank" href={shortLink}>
        <ImLink /> {shortLink.replace('http://', '').replace('https://', '')}
      </a>
      <button className={styles.ready__link__copy} onClick={copyLink}>
        {isLinkCopied ? "Готово" : "Копировать"}
      </button>
    </div>
  );
}
