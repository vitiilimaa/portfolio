import styles from "./styles.module.css";
import { TitleSection, SystemXPWindow } from "../../components";
import systemXPWindowData from "../../data/systemXPWindowData";

const Projects = () => {
  return (
    <section
      id="projects"
      className={`${styles.desktop} row text-center gap-5 pb-5 gap-xl-0`}
    >
      <TitleSection addClassToContainer="mt-5" caption="Projetos" />
      <div
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
      </div>
    </section>
  );
};

export default Projects;
