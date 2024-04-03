import styles from "./styles.module.css";
import MyPictureAboutMe from "../../img/myPhotos/my-picture-about-me.png";
import { TitleSection } from "../../components";
import { useInView, animated } from "@react-spring/web";

const AboutMe = () => {
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
      id="aboutMe"
      className="row bg-black px-3 pb-5 text-center py-xl-6 py-xxl-6-5"
    >
      <animated.div
        ref={ref}
        style={springs}
        className="col-12 mt-5 col-xl-6 mt-xl-0"
      >
        <img
          src={MyPictureAboutMe}
          alt="my-picture-about-me"
          className={`${styles.myPictureAboutMe}`}
        />
      </animated.div>
      <animated.div
        ref={ref}
        style={springs}
        className="col-12 mt-4 d-flex flex-column gap-3 col-xl-6 justify-content-xl-center justify-content-xxl-start"
      >
        <TitleSection
          addClassToContainer="text-nowrap justify-content-center justify-content-xl-start"
          addClassToText="px-xl-0"
          caption="Sobre mim"
        />
        <p className="text-white text-justify mx-2 mx-md-5 fs-xl-18px mx-xl-0 me-xl-7 mt-xxl-4 fs-xxl-22px lh-xxl-1">
          Sou um <strong>desenvolvedor front-end</strong> com
          <strong> 2 anos de experiência</strong>, atualmente buscando aprimorar
          minhas habilidades em <strong> React</strong> enquanto curso
          <strong> Análise e Desenvolvimento de Sistemas</strong>.
        </p>
        <p className="text-white text-justify mx-2 mx-md-5 mx-xl-0 me-xl-7 fs-xl-18px fs-xxl-22px lh-xxl-1">
          Meu primeiro contato com a programação foi após entrar na faculdade,
          em que logo no <strong>primeiro semestre</strong> desafiei a mim mesmo
          a <strong>conseguir um estágio</strong> para colocar em prática todo o
          conhecimento que obtinha enquanto estudava. Com muito esforço,
          <strong> tive êxito no meu objetivo</strong>, e assim, fui aprimorando
          as minhas habilidades ao longo do tempo.
        </p>
        <p className="text-white text-justify mx-2 mx-md-5 mx-xl-0 me-xl-7 fs-xl-18px fs-xxl-22px lh-xxl-1">
          Minha paixão pela programação me impulsiona a enfrentar novos desafios
          constantemente, com o objetivo de me tornar um{" "}
          <strong>desenvolvedor mais completo e eficiente.</strong>
        </p>
        <div className="mt-4 mt-xl-5 d-xl-flex">
          <span className="fs-5 text-white fw-bold text-xl-start pe-xl-5 fs-xxl-24px">
            Tecnologias:
          </span>
          <div className="mt-3 mt-xl-0">
            <div className="d-flex gap-2 justify-content-center align-items-center justify-content-xl-start">
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
            <div className="mt-3 mb-3 d-flex gap-2 justify-content-center align-items-center justify-content-xl-start">
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
            <div className="mt-3 mb-3 d-flex gap-2 justify-content-center align-items-center justify-content-xl-start">
              <i
                className={`devicon-nextjs-plain ${styles.iconTechnologies}`}
              />
              <i
                className={`devicon-nodejs-plain ${styles.iconTechnologies}`}
              />
              <i
                className={`devicon-mongodb-plain ${styles.iconTechnologies}`}
              />
              <i
                className={`devicon-postman-plain ${styles.iconTechnologies}`}
              />

            </div>

          </div>
        </div>
      </animated.div>
    </section>
  );
};

export default AboutMe;
