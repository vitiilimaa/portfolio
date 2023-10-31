import React from "react";
import styles from "./styles.module.css";

interface ButtonProps {
  title: string;
  addClass?: string;
}

const Button: React.FC<ButtonProps> = ({ title, addClass }) => {
  return <button className={`${styles.btn} ${addClass}`}>{title}</button>;
};

export default Button;
