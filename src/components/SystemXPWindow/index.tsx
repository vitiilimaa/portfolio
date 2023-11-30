import styles from "./styles.module.css";
import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "@react-spring/web";
import Draggable from "react-draggable";
import MessageError from "./MessageError";

interface SystemXPWindowProp {
  id: number;
  title: string;
  urlGithub: string;
  urlProject: string;
  containerStyle?: string;
}

const SystemXPWindow: React.FC<SystemXPWindowProp> = ({
  id,
  title,
  urlGithub,
  urlProject,
}) => {
  const [isMaximized, setIsMaximized] = useState(false);
  const janelaRef = useRef<HTMLDivElement>(null);
  const topJanelaRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(87);
  const [windowPosition, setWindowPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    setHeaderHeight(
      windowWidth >= 1400
        ? 78
        : windowWidth >= 1200
        ? 83
        : windowWidth >= 576
        ? 73
        : 70
    );

    setWindowHeight(windowWidth > 1502 ? 838 : windowWidth > 1200 ? 839 : 849);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  const animationProps = useSpring({
    width: isMaximized ? windowWidth : 720,
    height: isMaximized ? windowHeight : 544,
    top: 0,
    left: 0,
    onRest: () => {
      const currentWindow = janelaRef.current as HTMLElement;

      if (isMaximized) {
        setWindowPosition({ x: 0, y: 0 });
        window.scrollTo({
          top: currentWindow.offsetTop - headerHeight,
          behavior: "smooth",
        });
        document.documentElement.style.overflowY = "hidden";
      } else {
        window.scrollTo({
          top: currentWindow.offsetTop - 50 - headerHeight,
          behavior: "smooth",
        });
        document.documentElement.style.overflowY = "scroll";
      }
    },
  });

  return (
    <Draggable
      onStart={() => {
        const currentWindow = janelaRef.current as HTMLElement;
        const currentWindowTop = topJanelaRef.current as HTMLElement;

        janelaRef.current?.parentNode?.childNodes.forEach((element) => {
          const iteratedElement = element as HTMLElement;
          const zIndexValue = +iteratedElement.style.zIndex;

          if (
            (iteratedElement as HTMLElement) &&
            iteratedElement?.id === currentWindow.id
          ) {
            if (zIndexValue === 1) {
              currentWindow.style.zIndex = "2" || null;
              currentWindow.style.filter = "contrast(1)";
              currentWindowTop.style.filter = "contrast(1)";
            }
          } else {
            iteratedElement.style.zIndex = "1";
            iteratedElement.style.filter = "contrast(.8)";
          }
        });
      }}
      onDrag={(_, ui) => {
        setWindowPosition({ x: ui.x, y: ui.y });
      }}
      position={windowPosition}
      disabled={isMaximized}
      nodeRef={janelaRef}
    >
      <animated.div
        id={`window-${id}`}
        className={`${styles.window}`}
        ref={janelaRef}
        style={{ ...animationProps, zIndex: 1 }}
      >
        <div className={styles.topBar} ref={topJanelaRef}>
          <div className={styles.titleBar}>
            <img
              width="16"
              height="16"
              src="https://upload.wikimedia.org/wikipedia/commons/1/18/Internet_Explorer_10%2B11_logo.svg"
              alt="IE Logo"
            />
            <p
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {title} - Internet Explorer
            </p>
          </div>
          <div className={styles.areaButtons}>
            <button className={styles.windowButton} aria-label="Minimize" />
            <button
              aria-label="Maximize"
              onClick={() => {
                if (!isMaximized) {
                  setWindowPosition({ x: 0, y: 0 });
                }
                setIsMaximized(!isMaximized);
              }}
            />
            <button aria-label="Close" />
          </div>
        </div>
        <div style={{ background: "#f1eee5" }}>
          <div className={styles.textOptions}>
            <a href={urlGithub} target="_blank" rel="noopener noreferrer">
              Repositório
            </a>
            <a href={urlProject} target="_blank" rel="noopener noreferrer">
              Abrir em nova guia
            </a>
          </div>
        </div>
        <hr style={{ margin: 0 }} />
        <div className={styles.windowBody}>
          <iframe className={styles.iframe} src={urlProject} title={title} />
        </div>
        {isMaximized && (
          <MessageError
            title={title}
            message={
              "Para conseguir navegar entre as sessões, minimize a janela do projeto."
            }
          />
        )}
      </animated.div>
    </Draggable>
  );
};

export default SystemXPWindow;
