import styles from "./styles.module.css";
import { Timeline, TitleSection } from "../../components";

const Experience = () => {
  return (
    <section id="experience" className="row">
      <TitleSection
        addClassToContainer={`${styles.containerTimelineTitle} justify-content-center`}
        caption="Experiência"
      />
      <Timeline />
    </section>
  );
};

export default Experience;
