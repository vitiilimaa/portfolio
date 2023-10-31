import styles from "./styles.module.css";
import MyPictureAboutMe from "../../img/photos/my-picture-about-me.png";
import { TitleSection } from "../../components";

const AboutMe = () => {
  return (
    <section
      id="aboutMe"
      className="row bg-black px-3 pb-5 text-center py-xl-6 py-xxl-6-5"
    >
      <div className="col-12 col-xl-6">
        <img
          src={MyPictureAboutMe}
          alt="my-picture-about-me"
          className={`${styles.myPictureAboutMe} mt-5 mt-xxl-0`}
        />
      </div>
      <div className="col-12 col-xl-6 mt-4 d-flex flex-column justify-content-xl-center justify-content-xxl-start gap-3">
        <TitleSection
          containerStyle="text-nowrap justify-content-xl-start"
          textStyle="px-xl-0"
          caption="Sobre mim"
        />
        <p className="mx-2 mx-md-5 mx-xl-0 me-xl-7 mt-xxl-4 fs-xl-18px fs-xxl-22px lh-xxl-1 text-white text-justify">
          Sou um <strong>desenvolvedor front-end</strong> com
          <strong> 2 anos de experiência</strong>, atualmente buscando aprimorar
          minhas habilidades em <strong> React</strong> enquanto curso
          <strong> Análise e Desenvolvimento de Sistemas</strong>. Minha paixão
          pela programação me impulsiona a enfrentar novos desafios
          constantemente, com o objetivo de me tornar um desenvolvedor mais
          completo e eficiente.
        </p>
        <div className="row mt-xxl-7">
          <span className="col-12 col-xl-3 col-xxl-2 me-xxl-4 text-xl-start mt-3 mt-xl-5 fs-5 fs-xxl-24px text-white fw-bold">
            Tecnologias:
          </span>
          <div className="col-12 col-xl-9 col-xxl-9 mt-3 mt-xl-5">
            <div className="d-flex gap-2 justify-content-center justify-content-xl-start align-items-center">
              <i
                className={`devicon-javascript-plain ${styles.iconTechnologies}`}
              />
              <i
                className={`devicon-typescript-plain ${styles.iconTechnologies}`}
              />
              <i className={`devicon-react-plain ${styles.iconTechnologies}`} />
              <i
                className={`devicon-jquery-plain ${styles.iconTechnologies}`}
              />
              <i className={`devicon-lua-plain ${styles.iconTechnologies}`} />
              <i className={`devicon-sass-plain ${styles.iconTechnologies}`} />
            </div>
            <div className="mt-3 mb-3 d-flex gap-2 justify-content-center justify-content-xl-start align-items-center">
              <i
                className={`devicon-bootstrap-plain ${styles.iconTechnologies}`}
              />
              <i className={`devicon-html5-plain ${styles.iconTechnologies}`} />
              <i className={`devicon-css3-plain ${styles.iconTechnologies}`} />
              <i className={`devicon-git-plain ${styles.iconTechnologies}`} />
              <i
                className={`devicon-microsoftsqlserver-plain ${styles.iconTechnologies}`}
              />
              <i
                className={`devicon-postgresql-plain ${styles.iconTechnologies}`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
