import styles from "./styles.module.css";
import React, { useState, useEffect, useRef, CSSProperties } from "react";
import { useSpring, animated } from "@react-spring/web";
import Draggable from "react-draggable";
import MessageError from "./MessageError";
import iconInternetExplorer from "../../img/icons/iconInternetExplorer.svg";
import useHeaderBlocker from "../../hooks/useHeaderBlocker";

interface SystemXPWindowProp {
  id: number;
  title: string;
  logo: string;
  containerStyle?: CSSProperties;
  contentStyle?: CSSProperties;
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
  logo,
  containerStyle,
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
  const [headerHeight, setHeaderHeight] = useState<number>(
    document.querySelector("header")?.offsetHeight || 0
  );
  const [windowPosition, setWindowPosition] = useState<WindowPositionProps>({
    x: 0,
    y: 0,
  });
  const { showError, setMaximizedXPWindow } = useHeaderBlocker();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    setHeaderHeight(
      (windowWidth >= 1400
        ? (document.querySelector("header")?.offsetHeight || 0) - 6
        : document.querySelector("header")?.offsetHeight || 0) || 0
    );
    setWindowHeight(
      windowWidth >= 1400
        ? window.innerHeight - headerHeight - 6
        : window.innerHeight - headerHeight
    );

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [headerHeight, windowWidth]);

  useEffect(() => {
    if (windowMaximized.initialized) {
      handleFocusWindows();
      const referenceTitle =
        document.getElementById("title-reference")?.offsetTop || 0;
      if (windowMaximized.isMaximized) {
        setMaximizedXPWindow(windowMaximized.isMaximized);
        setWindowPosition({ x: 0, y: 0 });
        window.scrollTo({
          top: referenceTitle - headerHeight,
          behavior: "smooth",
        });
        document.documentElement.style.overflowY = "hidden";
      } else {
        setMaximizedXPWindow(windowMaximized.isMaximized);
        window.scrollTo({
          top: referenceTitle - headerHeight * 3,
          behavior: "smooth",
        });
        document.documentElement.style.overflowY = "scroll";
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    width: windowMaximized.isMaximized ? windowWidth : 600,
    height: windowMaximized.isMaximized ? windowHeight : 600,
    top: 0,
    left: 0,
  });

  return (
    <Draggable
      onStart={handleFocusWindows}
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
        onClick={handleFocusWindows}
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
                setIsWindowMaximized({
                  initialized: true,
                  isMaximized: !windowMaximized.isMaximized,
                });
              }}
            />
            <button id="closeXPWindow" />
          </div>
        </div>
        <div style={{ background: "#f1eee5" }}>
          <div className={styles.textOptions}>
            {urlGithub && (
              <a href={urlGithub} target="_blank">
                Repositório
              </a>
            )}
            <a href={urlProject} target="_blank">
              Abrir em nova guia
            </a>
          </div>
        </div>
        <hr style={{ margin: 0 }} />
        <div className={styles.windowBody} style={containerStyle}>
          <img className={`${styles.imgBody}`} src={logo} />
          {showError && (
            <MessageError
              title={title}
              message={
                "Para conseguir navegar entre as sessões, minimize a janela do projeto."
              }
            />
          )}
        </div>
      </animated.div>
    </Draggable>
  );
};

export default SystemXPWindow;
