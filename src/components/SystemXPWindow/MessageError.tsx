import React from "react";
import styles from "./styles.module.css";
import iconErrorWinXP from "../../img/icons/iconErrorWinXP.png";
import useHeaderBlocker from "../../hooks/useHeaderBlocker";
import { animated, useSpring } from "@react-spring/web";

interface MessageErrorProps {
  title: string;
  message: string;
}

const MessageError: React.FC<MessageErrorProps> = ({ title, message }) => {
  const { setShowError } = useHeaderBlocker();

  const animationProps = useSpring({
    to: { opacity: 1 },
  });

  return (
    <animated.div
      style={{ ...animationProps, zIndex: 1 }}
      className={styles.error}
    >
      <div className={styles.topBar}>
        <div className={styles.titleBar}>
          <p>Error - App{title.replace(/\s/g, "")}.exe</p>
        </div>
        <div className={styles.areaButtonsMessageError}>
          <button
            style={{ filter: "contrast(100%)" }}
            id="closeErrorXPWindow"
            onClick={() => setShowError(false)}
          />
        </div>
      </div>
      <div className={styles.message}>
        <img src={iconErrorWinXP} />
        <p>{message}</p>
      </div>
      <div className="w-full text-center mt-3">
        <button className={styles.ok} onClick={() => setShowError(false)}>
          <span>OK</span>
        </button>
      </div>
    </animated.div>
  );
};

export default MessageError;
