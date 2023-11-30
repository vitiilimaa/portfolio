import styles from "./styles.module.css";
import { TitleSection, SystemXPWindow } from "../../components";

const Projects = () => {
  return (
    <section
      id="projects"
      className={`${styles.desktop} row text-center gap-5 pb-5 gap-xl-0`}
    >
      <TitleSection containerStyle="mt-5" caption="Projetos" />
        <div className="col-12 d-flex flex-wrap justify-content-around align-items-around gap-5 mt-xl-5">
          <SystemXPWindow
            id={0}
            title="Página do Grêmio"
            urlGithub="https://github.com/vitiilimaa/page-gremio-2022"
            urlProject="https://page-gremio-2022.vercel.app"
          />
          <SystemXPWindow
            id={1}
            title="Gestor de Estoque"
            urlGithub="https://github.com/vitiilimaa/gestao-de-estoque"
            urlProject="https://gestao-de-estoque-three.vercel.app"
           />
        </div>
    </section>
  );
};

export default Projects;
