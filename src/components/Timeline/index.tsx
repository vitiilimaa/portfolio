import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faCheck } from "@fortawesome/free-solid-svg-icons";
import timelineData from "../../data/timelineData";

const Timeline = () => {
  return (
    <VerticalTimeline className="col-12 ps-5 pe-5" lineColor="#000">
      {timelineData.map((data, i) => {
        return (
          <VerticalTimelineElement
            key={i}
            contentStyle={{
              boxShadow:
                "0 0.25em 0.5em 0 rgba(0, 0, 0, 0.25), 0 0.4em 1.25em 0 rgba(0, 0, 0, 0.15)",
              padding: "2em 3em",
            }}
            date={data.date}
            icon={
              <FontAwesomeIcon
                icon={data.isProgramming ? faSpinner : faCheck}
              />
            }
            iconStyle={{
              backgroundColor: data.isProgramming ? "#FFF000" : "#04ff37",
              boxShadow:
                "0 0 0 2px #000, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)",
            }}
          >
            <h2 className="vertical-timeline-element-title text-dark">
              {data.title}
            </h2>
            <h3 className="vertical-timeline-element-subtitle text-secondary">
              {data.subtitle}
            </h3>
            <p className="vertical-timeline-element-description text-justify">
              {data.description}
            </p>
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
};

export default Timeline;
