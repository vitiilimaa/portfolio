import styles from "./styles.module.css";
import React from "react";

interface TimelineItemProps {
  start?: boolean;
  end?: boolean;
  title: string;
  company: string;
  date: string;
  description: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  company,
  date,
  description,
  start,
  end,
}) => {
  return (
    <div className="col-12">
      {start && (
        <div className="col-12 mt-5 d-flex align-items-center justify-content-center">
          <div className={`${styles.circleItemsExperience}`} />
        </div>
      )}
      <div className="col-12 d-flex justify-content-center align-items-center">
        <div className={`${styles.line}`} />
      </div>
      <div className={styles.textBlock}>
        <h1 className="fs-4 fw-bold">{title}</h1>
        <h2 className="fs-6">{company}</h2>
        <h3 className="fs-6">{date}</h3>
        <p className="mt-2">{description}</p>
      </div>
      {end && (
        <>
          <div className="col-12 d-flex justify-content-center align-items-center">
            <div className={`${styles.line}`} />
          </div>
          <div
            className={`col-12 mb-3 d-flex justify-content-center align-items-center`}
          >
            <div className={styles.point} />
            <div className={styles.point} />
            <div className={styles.point} />
          </div>
        </>
      )}
    </div>
  );
};

export default TimelineItem;
