import styles from "./styles.module.css";
import React from "react";

interface TitleSectionProps {
  caption: string;
  showPoint?: boolean;
  containerStyle?: string;
  textStyle?: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({ caption, containerStyle, textStyle }) => {
  return (
    <div className={`col-12 d-flex justify-content-center align-items-center ${containerStyle}`}>
    <h1 className={`${styles.titleSections} ${textStyle} fs-xxl-64px`}>
      {caption}
      <span style={{ color: "#ffff00" }}>.</span>
    </h1>
</div>
  );
};

export default TitleSection;
