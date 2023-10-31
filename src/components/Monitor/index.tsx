import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import React from "react";

interface MonitorProp {
  screen: string;
  urlGithub: string;
}

const Monitor: React.FC<MonitorProp> = ({ screen, urlGithub }) => {
  return (
    <div className={`d-none ${styles.containerMonitor} d-xl-block`}>
      <div className={styles.headerMonitor}>
        <div className={styles.circlesHeaderMonitor} />
        <div className={styles.circlesHeaderMonitor} />
        <div className={styles.circlesHeaderMonitor} />
      </div>
      <div
        className={styles.screenMonitor}
        style={{ backgroundImage: `url(${screen})` }}
      />
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

export default Monitor;
