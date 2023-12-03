import styles from "./styles.module.css";
import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "@react-spring/web";
import Draggable from "react-draggable";
import MessageError from "./MessageError";
import iconInternetExplorer from "../../img/icons/iconInternetExplorer.svg";
import useHeaderBlocker from "../../hooks/useHeaderBlocker";

interface SystemXPWindowProp {
  id: number;
  title: string;
  urlGithub: string;
  urlProject: string;
}

interface WindowMaximizedProps {
  initialized: boolean;
  isMaximized: boolean;
}

interface WindowPositionProps {
  x: number;
  y: number;
}

const SystemXPWindow: React.FC<SystemXPWindowProp> = ({
  id,
  title,
  urlGithub,
  urlProject,
}) => {
  const [windowMaximized, setIsWindowMaximized] =
    useState<WindowMaximizedProps>({
      initialized: false,
      isMaximized: false,
    });
  const windowRef = useRef<HTMLDivElement>(null);
  const windowTopRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState<number>(0);
  const [headerHeight, setHeaderHeight] = useState<number>(87);
  const [windowPosition, setWindowPosition] = useState<WindowPositionProps>({
    x: 0,
    y: 0,
  });
  const { setMaximizedXPWindow } = useHeaderBlocker();

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

  useEffect(() => {
    if (windowMaximized.initialized) {
      handleFocusWindows();
      const currentWindow = windowRef.current as HTMLElement;
      const section = currentWindow?.parentElement?.parentElement;
      const sectionOffsetTop = section?.offsetTop || 0;
      if (windowMaximized.isMaximized) {
        setMaximizedXPWindow(windowMaximized.isMaximized);
        setWindowPosition({ x: 0, y: 0 });
        window.scrollTo({
          top: currentWindow.offsetTop - headerHeight,
          behavior: "smooth",
        });
        document.documentElement.style.overflowY = "hidden";
      } else {
        setMaximizedXPWindow(windowMaximized.isMaximized);
        window.scrollTo({
          top: sectionOffsetTop - headerHeight,
          behavior: "smooth",
        });
        document.documentElement.style.overflowY = "scroll";
      }
    }
  }, [windowMaximized]);

  function handleFocusWindows() {
    const currentWindow = windowRef.current as HTMLElement;
    const currentWindowTop = windowTopRef.current as HTMLElement;
    windowRef.current?.parentNode?.childNodes.forEach((element) => {
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
        windowMaximized.isMaximized
          ? (iteratedElement.style.display = "none")
          : (iteratedElement.style.display = "block");
      }
    });
  }

  const animationProps = useSpring({
    width: windowMaximized.isMaximized ? windowWidth : 720,
    height: windowMaximized.isMaximized ? windowHeight : 544,
    top: 0,
    left: 0,
  });

  return (
    <Draggable
      onDrag={(_, ui) => {
        setWindowPosition({ x: ui.x, y: ui.y });
      }}
      position={windowPosition}
      disabled={windowMaximized.isMaximized || windowWidth < 992}
      nodeRef={windowRef}
    >
      <animated.div
        id={`window-${id}`}
        className={`${styles.window}`}
        onFocus={handleFocusWindows}
        ref={windowRef}
        style={{ ...animationProps, zIndex: 1 }}
      >
        <div className={styles.topBar} ref={windowTopRef}>
          <div className={styles.titleBar}>
            <img
              width="16"
              height="16"
              src={iconInternetExplorer}
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
            <button className={styles.windowButton} id="minimizeXPWindow" />
            <button
              id="maximizeXPWindow"
              onClick={() => {
                if (windowWidth > 992) {
                  setIsWindowMaximized({
                    initialized: true,
                    isMaximized: !windowMaximized.isMaximized,
                  });
                }
              }}
            />
            <button id="closeXPWindow" />
          </div>
        </div>
        <div style={{ background: "#f1eee5" }}>
          <div className={styles.textOptions}>
            <a href={urlGithub} target="_blank">
              Repositório
            </a>
            <a href={urlProject} target="_blank">
              Abrir em nova guia
            </a>
          </div>
        </div>
        <hr style={{ margin: 0 }} />
        <div className={styles.windowBody}>
          <iframe className={styles.iframe} src={urlProject} title={title} />
        </div>
        {windowMaximized.isMaximized && (
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
