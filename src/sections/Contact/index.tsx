import { useState } from "react";
import styles from "./styles.module.css";
import { TitleSection, Button, TextInput, SocialMedia } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMap } from "@fortawesome/free-regular-svg-icons";
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import submit from "../../services/submit";
import validateFields from "../../helpers/validateFields";
import { useInView, animated } from "@react-spring/web";

interface FieldsProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FieldsErrorProps {
  name: {
    on: boolean | null;
    message: string;
  };
  email: {
    on: boolean | null;
    message: string;
  };
  subject: {
    on: boolean | null;
    message: string;
  };
  message: {
    on: boolean | null;
    message: string;
  };
}

const Contact = () => {
  const [ref, springs] = useInView(() => ({
    from: {
      transform: "scale(0)",
    },
    to: {
      transform: "scale(1)",
    },
  }));

  const [isLoading, setIsLoading] = useState(false);
  const [fields, setFields] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [fieldsError, setErrorFields] = useState<FieldsErrorProps>({
    name: {
      on: null,
      message: "",
    },
    email: {
      on: null,
      message: "",
    },
    subject: {
      on: null,
      message: "",
    },
    message: {
      on: null,
      message: "",
    },
  });

  return (
    <section
      id="contact"
      className="row align-items-center justify-content-center pb-5 bg-black px-5 align-items-xl-start ps-xl-6 pb-xxl-5"
    >
      <animated.div ref={ref} style={springs} className="col-12 col-xl-4">
        <TitleSection
          caption="Contato"
          addClassToText="px-xl-0"
          addClassToContainer="mt-5 mb-2 justify-content-xl-start"
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
      </animated.div>
      <animated.div ref={ref} style={springs} className="col-12 col-xl-6">
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
              isValidate={!fieldsError.name.on}
              errorMessage={fieldsError.name.message}
              onChangeValue={(newValue) => {
                const { existError, message } = validateFields(
                  "name",
                  newValue
                );
                setFields((prevState) => ({
                  ...prevState,
                  name: newValue,
                }));
                setErrorFields((prevState) => ({
                  ...prevState,
                  name: {
                    on: existError,
                    message: message,
                  },
                }));
              }}
            />
            <TextInput
              type="email"
              id="email"
              title="E-mail"
              value={fields.email}
              isValidate={!fieldsError.email.on}
              errorMessage={fieldsError.email.message}
              onChangeValue={(newValue) => {
                const { existError, message } = validateFields(
                  "email",
                  newValue
                );
                setFields((prevState) => ({
                  ...prevState,
                  email: newValue,
                }));
                setErrorFields((prevState) => ({
                  ...prevState,
                  email: {
                    on: existError,
                    message: message,
                  },
                }));
              }}
            />
            <TextInput
              id="subject"
              title="Assunto"
              value={fields.subject}
              isValidate={!fieldsError.subject.on}
              errorMessage={fieldsError.subject.message}
              onChangeValue={(newValue) => {
                const { existError, message } = validateFields(
                  "subject",
                  newValue
                );
                setFields((prevState) => ({
                  ...prevState,
                  subject: newValue,
                }));
                setErrorFields((prevState) => ({
                  ...prevState,
                  subject: {
                    on: existError,
                    message: message,
                  },
                }));
              }}
            />
            <TextInput
              addClassToContainer="mb-2"
              id="message"
              type="Memo"
              title="Sua mensagem"
              value={fields.message}
              isValidate={!fieldsError.message.on}
              errorMessage={fieldsError.message.message}
              onChangeValue={(newValue) => {
                const { existError, message } = validateFields(
                  "message",
                  newValue
                );
                setFields((prevState) => ({
                  ...prevState,
                  message: newValue,
                }));
                setErrorFields((prevState) => ({
                  ...prevState,
                  message: {
                    on: existError,
                    message: message,
                  },
                }));
              }}
            />
          </div>
          <Button
            type="submit"
            title="Enviar"
            addClass={`w-100 py-2 fs-xl-18px mt-2 mb-2`}
            isLoading={isLoading}
            onPress={async (e) => {
              e.preventDefault();
              if (
                fieldsError.email.on === false &&
                fieldsError.message.on === false &&
                fieldsError.name.on === false &&
                fieldsError.subject.on === false
              ) {
                setIsLoading(true);
                await submit(fields);
                setIsLoading(false);
              } else {
                (Object.keys(fields) as Array<keyof FieldsProps>).map(
                  (field) => {
                    const { existError, message } = validateFields(
                      field,
                      fields[field]
                    );
                    setErrorFields((prevState) => ({
                      ...prevState,
                      [field]: {
                        on: existError,
                        message: message,
                      },
                    }));
                  }
                );
              }
            }}
          />
        </form>
        <SocialMedia
          color="#fff"
          fontSize={25}
          containerStyle="mt-4 justify-content-center"
        />
      </animated.div>
    </section>
  );
};

export default Contact;
