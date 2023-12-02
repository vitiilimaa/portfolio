import styles from "./styles.module.css";
import React from "react";

interface TitleSectionProps {
  caption: string;
  showPoint?: boolean;
  addClassToContainer?: string;
  addClassToText?: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({ caption, addClassToContainer = "", addClassToText = "" }) => {
  return (
    <div className={`col-12 d-flex justify-content-center align-items-center ${addClassToContainer}`}>
    <h1 className={`${styles.titleSections} ${addClassToText} fs-xxl-64px`}>
      {caption}
      <span style={{ color: "#ffff00" }}>.</span>
    </h1>
</div>
  );
};

export default TitleSection;
