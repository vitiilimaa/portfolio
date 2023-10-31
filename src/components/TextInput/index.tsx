import React from "react";
import styles from "./styles.module.css";

interface TextInputProps {
  title: string;
  id: string;
  containerStyle?: string;
  type?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  type,
  title,
  id,
  containerStyle,
}) => {
  return (
    <div className={containerStyle}>
      {type?.toUpperCase() === "MEMO" ? (
        <textarea
          className={styles.memoStyle}
          placeholder={title}
          name={id}
          id={id}
          cols={30}
          rows={10}
        />
      ) : (
        <input
          className={styles.inputStyle}
          placeholder={title}
          name={id}
          id={id}
          type="text"
        />
      )}
    </div>
  );
};

export default TextInput;
