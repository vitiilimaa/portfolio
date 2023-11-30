import { useState } from "react";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TitleSection, Button, TextInput } from "../../components";
import { faEnvelope, faMap } from "@fortawesome/free-regular-svg-icons";
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import submit from "../../services/submit";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [fields, setFields] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  return (
    <section
      id="contact"
      className="row align-items-center justify-content-center pb-5 bg-black px-5 align-items-xl-start ps-xl-6 pb-xxl-6-5"
    >
      <div className="col-12 col-xl-4">
        <TitleSection
          caption="Contato"
          textStyle="px-xl-0"
          containerStyle="mt-5 mb-2 justify-content-xl-start"
        />
        <div className="mt-4 text-white">
          <p className="d-flex column-gap-2 align-items-center fs-xxl-18px">
            <span className={styles.containerIconsContact}>
              <FontAwesomeIcon
                className={styles.iconsContact}
                icon={faEnvelope}
              />
            </span>
            vitilimaa@gmail.com
          </p>
          <p className="d-flex column-gap-2 align-items-center mt-3 fs-xxl-18px">
            <span className={styles.containerIconsContact}>
              <FontAwesomeIcon
                className={styles.iconsContact}
                icon={faMobileScreen}
              />
            </span>
            (55) 55 99152-5363
          </p>
          <p className="d-flex column-gap-2 align-items-center mt-3 mb-2 fs-xxl-18px">
            <span className={styles.containerIconsContact}>
              <FontAwesomeIcon className={styles.iconsContact} icon={faMap} />
            </span>
            Santa Maria - RS
          </p>
        </div>
      </div>
      <div className="col-12 col-xl-6">
        <form className="mb-4 mt-4 bg-white text-black py-4 px-4 px-xl-5 mb-xl-0 mt-xl-5-5 fs-xxl-18px">
          <p className="mt-2">
            Estou disponível para <b>freelance</b> também
          </p>
          <p className="fs-3 mt-4 lh-1">
            Vamos trabalhar <b> juntos</b>?
          </p>
          <div className="d-flex flex-column gap-2 mt-4">
            <TextInput
              id="name"
              title="Nome"
              value={fields.name}
              onChangeValue={(newValue) => {
                setFields((prevState) => ({
                  ...prevState,
                  name: newValue,
                }));
              }}
            />
            <TextInput
              type="email"
              id="email"
              title="E-mail"
              value={fields.email}
              onChangeValue={(newValue) => {
                setFields((prevState) => ({
                  ...prevState,
                  email: newValue,
                }));
              }}
            />
            <TextInput
              id="subject"
              title="Assunto"
              value={fields.subject}
              onChangeValue={(newValue) => {
                setFields((prevState) => ({
                  ...prevState,
                  subject: newValue,
                }));
              }}
            />
            <TextInput
              containerStyle="mb-2"
              id="message"
              type="Memo"
              title="Sua mensagem"
              value={fields.message}
              onChangeValue={(newValue) => {
                setFields((prevState) => ({
                  ...prevState,
                  message: newValue,
                }));
              }}
            />
          </div>
          <Button
            type="submit"
            title="Enviar"
            addClass={`w-100 py-2 fs-7 fs-xl-18px mt-2 mb-2`}
            isLoading={isLoading}
            onPress={async (e) => {
              setIsLoading(true);
              await submit(e, fields);
              setIsLoading(false);
            }}
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;
