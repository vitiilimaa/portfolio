import React, { ReactNode } from "react";
import { createContext, useState } from "react";

interface HeaderContextProviderProps {
  children: ReactNode;
}

const HeaderContext = createContext({});

const HeaderContextProvider: React.FC<HeaderContextProviderProps> = ({
  children,
}) => {
  const [blockHeader, setBlockHeader] = useState<boolean>(false);
  const [maximizedXPWindow, setMaximizedXPWindow] = useState<boolean>(false);
  const [showError, setShowError] = useState(false);

  const block = {
    blockHeader,
    setBlockHeader,
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
