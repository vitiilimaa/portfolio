import styles from "./styles.module.css";
import { Button } from "../";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import useHeaderBlocker from "../../hooks/useHeaderBlocker";
import errorWinXP from "../../assets/audio/errorWinXP.mp3";
import { saveAs } from "file-saver";

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [visibleItemsNavbarToMobile, setVisibleItemsNavbarToMobile] =
    useState(false);
  const { maximizedXPWindow, setShowError } = useHeaderBlocker();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    windowWidth >= 992 && visibleItemsNavbarToMobile
      ? setVisibleItemsNavbarToMobile(false)
      : setVisibleItemsNavbarToMobile(true);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowWidth]);

  const handleLinkAnimation = (e: React.MouseEvent) => {
    e.preventDefault();

    const audio = new Audio(errorWinXP);
    const elem = e.currentTarget;
    const targetId = elem.getAttribute("href")?.slice(1);

    if (maximizedXPWindow) {
      setShowError(true);
      audio.play();
      return;
    } else {
      setShowError(false);
    }

    const targetElement = targetId
      ? document.getElementById(targetId)
      : undefined;

    const headerHeight = windowWidth > 1200 ? 86 : 75;

    const elementOffsetTop = targetElement
      ? targetElement.offsetTop - headerHeight
      : 0;

    window.scrollTo({
      top: elementOffsetTop,
      behavior: "smooth",
    });
  };

  return (
    <header className="fixed-top">
      <nav className="flex-wrap navbar pb-0">
        <div className="w-100 d-flex justify-content-around align-items-center pt-1 pt-xl-2 pb-2-5">
          <a
            className={styles.logo}
            aria-current="page"
            href="#"
            onClick={(e) => handleLinkAnimation(e)}
          >
            VB
          </a>
          <div className="d-none d-lg-flex ms-lg-6 column-gap-5 fs-xl-18px">
            <a
              className="nav-link active"
              aria-current="page"
              href="#"
              onClick={(e) => handleLinkAnimation(e)}
            >
              Início<span className={styles.point}>.</span>
            </a>
            <a
              className="nav-link active"
              aria-current="page"
              href="#aboutMe"
              onClick={(e) => handleLinkAnimation(e)}
            >
              Sobre<span className={styles.point}>.</span>
            </a>
            <a
              className="nav-link active"
              aria-current="page"
              href="#projects"
              onClick={(e) => handleLinkAnimation(e)}
            >
              Projetos<span className={styles.point}>.</span>
            </a>
            <a
              className="nav-link active"
              aria-current="page"
              href="#experience"
              onClick={(e) => handleLinkAnimation(e)}
            >
              Experiência<span className={styles.point}>.</span>
            </a>
            <a
              className="nav-link active"
              aria-current="page"
              href="#contact"
              onClick={(e) => handleLinkAnimation(e)}
            >
              Contato<span className={styles.point}>.</span>
            </a>
          </div>
          <Button
            title="Baixar CV"
            addClass="me-3 me-lg-0 py-6 fs-xl-18px mb-xl-1"
            onPress={() => saveAs("/resume.pdf", "Curriculo_Vitor_Hugo")}
          />
          <button
            className={`${styles.btnMenu} d-lg-none`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon
              icon={faBars}
              style={{ color: "#000000", fontSize: 25 }}
            />
          </button>
        </div>
        {visibleItemsNavbarToMobile && (
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto text-center">
              <li className="nav-item border border-start-0 border-end-0 border-top-0">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  onClick={(e) => handleLinkAnimation(e)}
                >
                  Início<span className={styles.point}>.</span>
                </a>
              </li>
              <li className="nav-item border border-start-0 border-top-0 border-end-0">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#aboutMe"
                  onClick={(e) => handleLinkAnimation(e)}
                >
                  Sobre<span className={styles.point}>.</span>
                </a>
              </li>
              <li className="nav-item border border-start-0 border-top-0 border-end-0">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#projects"
                  onClick={(e) => handleLinkAnimation(e)}
                >
                  Projetos<span className={styles.point}>.</span>
                </a>
              </li>
              <li className="nav-item border border-start-0 border-top-0 border-end-0">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#experience"
                  onClick={(e) => handleLinkAnimation(e)}
                >
                  Experiência<span className={styles.point}>.</span>
                </a>
              </li>
              <li className="nav-item border border-start-0 border-top-0 border-end-0 border-bottom-0">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#contact"
                  onClick={(e) => handleLinkAnimation(e)}
                >
                  Contato<span className={styles.point}>.</span>
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
