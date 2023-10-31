import styles from "./styles.module.css";
import { TitleSection, CellPhone, Monitor } from "../../components";
import { PageGremio, PageGremioMobile, GestorEstoque, GestorEstoqueMobile } from "../../img"

const Projects = () => {
  return (
    <section id="projects" className="row text-center gap-5 pb-4 pb-xxl-5">
      <TitleSection containerStyle="mt-5" caption="Projetos" />
      <div className="col-12 d-flex flex-wrap justify-content-around align-items-around gap-5">
        <CellPhone screen={PageGremioMobile} urlGithub="https://github.com/vitiilimaa/page-gremio-2022" />
        <CellPhone screen={GestorEstoqueMobile} urlGithub="https://github.com/vitiilimaa/gestao-de-estoque" />
        <Monitor screen={PageGremioMobile} urlGithub="https://github.com/vitiilimaa/page-gremio-2022" />
        <Monitor screen={GestorEstoqueMobile} urlGithub="https://github.com/vitiilimaa/gestao-de-estoque" />
      </div>
    </section>
  );
};

export default Projects;
