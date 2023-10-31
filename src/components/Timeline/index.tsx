import React from "react";
import { TimelineItem } from "..";

interface TimelineItemData {
  title: string;
  company: string;
  startDate: string;
  endDate?: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItemData[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="row">
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          start={index === 0}
          end={index === items.length - 1}
          title={item.title}
          company={item.company}
          date={`${item.startDate} - ${item.endDate || "Atual"}`}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Timeline;
