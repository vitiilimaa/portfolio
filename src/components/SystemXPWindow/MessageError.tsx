import React from "react";
import styles from "./styles.module.css";
import iconErrorWinXP from "../../img/png/iconErrorWinXP.png";

interface MessageErrorProps {
  title: string;
  message: string;
}

const MessageError: React.FC<MessageErrorProps> = ({ title, message }) => {
  return (
    <div className={styles.error}>
      <div className={styles.topBar}>
        <div className={styles.titleBar}>
          <p>Error - App{title.replace(/\s/g, "")}.exe</p>
        </div>
        <div className={styles.areaButtons}>
          <button id="erroFecha" aria-label="Close" />
        </div>
      </div>
      {/* ./FECHA TOPO DA JANELA --> */}
      <div className={styles.message}>
        <img src={iconErrorWinXP} />
        {message}
      </div>
      <button className={styles.ok}>
        <span>OK</span>
      </button>
    </div>
  );
};

export default MessageError;
