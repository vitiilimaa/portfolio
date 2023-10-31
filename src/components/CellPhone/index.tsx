import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import React from "react";

interface CellPhoneProp {
  screen: string;
  urlGithub: string;
}

const CellPhone: React.FC<CellPhoneProp> = ({ screen, urlGithub }) => {
  return (
    <div className={`${styles.containerCellPhone} d-xl-none`}>
      <div className={styles.headerCellPhone}>
        <div className={styles.circlesHeaderCellPhone} />
        <div className={styles.circlesHeaderCellPhone} />
        <div className={styles.circlesHeaderCellPhone} />
      </div>
      <div
        className={styles.screenCellPhone}
        style={{ backgroundImage: `url(${screen})` }}
      >
        <div className={styles.mainContainerIconsCellPhone}>
          <div className="position-absolute end-0 bottom-0 me-1 mb-1 d-flex column-gap-1">
            <i style={{ backgroundColor: "#ec6231" }} className={`devicon-html5-plain ${styles.iconCellPhone}`} />
            <i style={{ backgroundColor: "#0062b0" }} className={`devicon-css3-plain ${styles.iconCellPhone}`} />
          </div>
        </div>
      </div>
      <a
        href={urlGithub}
        target="_blank"
        className={`${styles.btnProjects} d-flex justify-content-center align-items-center gap-2`}
      >
        <FontAwesomeIcon
          icon={faEye}
          style={{ color: "#000000", fontSize: 18 }}
        />
        Visualizar
      </a>
      <a
        href={urlGithub}
        target="_blank"
        className={`${styles.btnProjects} d-flex justify-content-center align-items-center gap-2 ${styles.borderBlrRadius}`}
      >
        <FontAwesomeIcon
          icon={faGithub}
          style={{ color: "#000000", fontSize: 18 }}
        />
        Repositório
      </a>
    </div>
  );
};

export default CellPhone;
