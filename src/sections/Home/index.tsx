import styles from "./styles.module.css";
import { Button, SocialMedia } from "../../components";
import MyPicture from "../../img/myPhotos/my-picture.png";
import { useInView, animated } from "@react-spring/web";

const Home = () => {
  const [ref, springs] = useInView(() => ({
    from: {
      transform: "scale(0)",
    },
    to: {
      transform: "scale(1)",
    },
  }));

  return (
    <section className="row pb-5 justify-content-center align-items-center pb-xl-8 pb-xxl-5-5">
      <animated.div
        ref={ref}
        style={springs}
        className="col-12 text-center col-xl-4 text-xl-start mt-xl-5"
      >
        <h1 className="fw-bold text-nowrap fs-42px fs-xl-64px">
          Vitor Batista
        </h1>
        <h2 className="fw-normal fs-22px fs-xl-32px">Desenvolvedor React</h2>
        <p
          style={{ color: "#605f5f" }}
          className="mt-4 mx-4 mx-xl-0 mt-xl-4 fs-xl-18px"
        >
          Sou um desenvolvedor altamente motivado e apaixonado por desafios.
        </p>
        <a href="https://bit.ly/contratar-um-servico" target="_blank">
          <Button addClass="mt-5 fs-xl-18px" title="Bora conversar" />
        </a>
        <SocialMedia
          color="#000"
          fontSize={35}
          containerStyle="justify-content-center justify-content-xl-start mt-5 mt-xl-8"
        />
      </animated.div>
      <div className="col-12 text-center mt-5 col-xl-4 mt-xl-0">
        <animated.div ref={ref} style={springs}>
          <img src={MyPicture} alt="my-picture" className={styles.myPicture} />
        </animated.div>
      </div>
    </section>
  );
};

export default Home;
