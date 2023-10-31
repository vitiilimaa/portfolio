import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TitleSection, Button, TextInput } from "../../components";
import {
  faEnvelope,
  faMap
} from "@fortawesome/free-regular-svg-icons";
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <section id="contact" className="row align-items-center justify-content-center pb-5 bg-black">
      <TitleSection caption="Contato" containerStyle="mt-5 mb-2" />
      <div className="col-10 mt-4 text-white px-0">
        <p className="d-flex column-gap-2 align-items-center">
          <span className={styles.containerIconsContact}>
            <FontAwesomeIcon
              className={styles.iconsContact}
              icon={faEnvelope}
            />
          </span>
          vitilimaa@gmail.com
        </p>
        <p className="d-flex column-gap-2 align-items-center mt-3">
          <span className={styles.containerIconsContact}>
            <FontAwesomeIcon className={styles.iconsContact} icon={faMobileScreen} />
          </span>
          (55) 55 99152-5363
        </p>
        <p className="d-flex column-gap-2 align-items-center mt-3 mb-2">
          <span className={styles.containerIconsContact}>
            <FontAwesomeIcon
              className={styles.iconsContact}
              icon={faMap}
            />
          </span>
          Santa Maria - RS
        </p>
      </div>
      <form className="col-10 mb-4 mt-4 bg-white text-black py-4 px-4">
        <p className="mt-2">
          Estou disponível para <b>freelance</b> também
        </p>
        <p className="fs-3 mt-4 lh-1">
          Vamos trabalhar <b> juntos</b>?
        </p>
        <div className="d-flex flex-column gap-2 mt-4">
          <TextInput id="name" title="Nome" />
          <TextInput id="email" title="E-mail" />
          <TextInput id="subject" title="Assunto" />
          <TextInput id="message" type="Memo" title="Sua mensagem" />
        </div>
        <Button title="Enviar" addClass="w-100 py-2 fs-7 mt-2 mb-2" />
      </form>
    </section>
  );
};

export default Contact;
