import styles from "./styles.module.css";
import { Button } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import MyPicture from "../../img/photos/my-picture.png";

const Home = () => {
  return (
    <section className="row pb-5 pb-xl-8 pb-xxl-5-5 justify-content-center align-items-center">
      <div className="col-12 col-xl-4 text-center text-xl-start mt-xl-5">
        <h1 className="fw-bold fs-42px fs-xl-64px text-nowrap">
          Vitor Batista
        </h1>
        <h2 className="fw-normal fs-22px fs-xl-32px">
          Desenvolvedor React
        </h2>
        <p style={{ color: "#605f5f" }} className="mt-4 mx-4 mx-xl-0 mt-xl-4 fs-xl-18px">
          Sou um desenvolvedor altamente motivado e apaixonado por desafios.
        </p>
        <a href="https://bit.ly/contrate-um-servico" target="_blank">
          <Button addClass="mt-5 fs-xl-18px" title="Bora conversar" />
        </a>
        <div className="mt-5 mt-xl-8 gap-2 d-flex justify-content-center justify-content-xl-start align-items-center">
          <a href="https://github.com/vitiilimaa" target="_blank">
            <FontAwesomeIcon
              className={styles.iconSocialMedia}
              icon={faGithub}
              style={{ color: "#000000", fontSize: 35 }}
            />
          </a>
          <a href="https://www.linkedin.com/in/dev-batista/" target="_blank">
            <FontAwesomeIcon
              className={styles.iconSocialMedia}
              icon={faLinkedin}
              style={{ color: "#000000", fontSize: 35 }}
            />
          </a>
          <a href="https://www.instagram.com/vitor.batistavb/" target="_blank">
            <FontAwesomeIcon
              className={styles.iconSocialMedia}
              icon={faInstagram}
              style={{ color: "#000000", fontSize: 35 }}
            />
          </a>
        </div>
      </div>
      <div className="col-12 col-xl-4 mt-5 mt-xl-0 text-center">
        <img src={MyPicture} alt="my-picture" className={styles.myPicture} />
      </div>
    </section>
  );
};

export default Home;
