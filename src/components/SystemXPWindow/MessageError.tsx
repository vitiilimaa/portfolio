import React from "react";
import styles from "./styles.module.css";
import iconErrorWinXP from "../../img/icons/iconErrorWinXP.png";
import useHeaderBlocker from "../../hooks/useHeaderBlocker";

interface MessageErrorProps {
  title: string;
  message: string;
}

const MessageError: React.FC<MessageErrorProps> = ({ title, message }) => {
  const { showError, setShowError } = useHeaderBlocker();
  return (
    showError && (
      <div className={styles.error}>
        <div className={styles.topBar}>
          <div className={styles.titleBar}>
            <p>Error - App{title.replace(/\s/g, "")}.exe</p>
          </div>
          <div className={styles.areaButtonsMessageError}>
            <button
              style={{ filter: "contrast(100%)" }}
              aria-label="Close"
              onClick={() => setShowError(false)}
            />
          </div>
        </div>
        <div className={styles.message}>
          <img src={iconErrorWinXP} />
          {message}
        </div>
        <button className={styles.ok} onClick={() => setShowError(false)}>
          <span>OK</span>
        </button>
      </div>
    )
  );
};

export default MessageError;
