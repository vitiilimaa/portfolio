import React from "react";
import styles from "./styles.module.css";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  title: string;
  addClass?: string;
  onPress?: React.MouseEventHandler<HTMLButtonElement>;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  type,
  title,
  onPress,
  isLoading,
  addClass = "",
}) => {
  return (
    <button
      type={type ? type : "button"}
      className={`${styles.btn} ${addClass}`}
      onClick={onPress}
    >
      {isLoading ? (
        <div
          className={`spinner-border text-light ${styles.loading}`}
          role="status"
        />
      ) : (
        title
      )}
    </button>
  );
};

export default Button;
