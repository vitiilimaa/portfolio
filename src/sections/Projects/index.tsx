import styles from "./styles.module.css";
import { TitleSection, SystemXPWindow } from "../../components";
import systemXPWindowData from "../../data/systemXPWindowData";
import { useInView, animated } from "@react-spring/web";

const Projects = () => {
  const [ref, springs] = useInView(() => ({
    from: {
      transform: "scale(0)",
    },
    to: {
      transform: "scale(1)",
    },
  }));

  return (
    <section
      id="projects"
      className={`${styles.desktop} row text-center gap-5 pb-5 gap-xl-0`}
    >
      <TitleSection addClassToContainer="mt-5" caption="Projetos" />
      <animated.div
        ref={ref}
        style={springs}
        className="col-12 d-flex flex-wrap justify-content-around align-items-around gap-5 mt-xl-5"
      >
        {systemXPWindowData.map((data, key) => (
          <SystemXPWindow
            key={key}
            id={key}
            title={data.title}
            urlGithub={data.urlGithub}
            urlProject={data.urlProject}
          />
        ))}
      </animated.div>
    </section>
  );
};

export default Projects;
