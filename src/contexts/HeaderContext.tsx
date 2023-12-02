import React, { ReactNode } from "react";
import { createContext, useState } from "react";

interface HeaderContextProps {
  maximizedXPWindow: boolean;
  setMaximizedXPWindow: (value: boolean) => void;
  showError: boolean;
  setShowError: (value: boolean) => void;
}

interface HeaderContextProviderProps {
  children: ReactNode;
}

const HeaderContext = createContext<HeaderContextProps>({
  maximizedXPWindow: false,
  setMaximizedXPWindow: () => {},
  showError: false,
  setShowError: () => {}
});

const HeaderContextProvider: React.FC<HeaderContextProviderProps> = ({
  children,
}) => {
  const [maximizedXPWindow, setMaximizedXPWindow] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);

  const block = {
    maximizedXPWindow,
    setMaximizedXPWindow,
    showError,
    setShowError,
  };

  return (
    <HeaderContext.Provider value={block}>{children}</HeaderContext.Provider>
  );
};

export { HeaderContext, HeaderContextProvider };
export type { HeaderContextProps }