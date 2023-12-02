import { useContext } from "react";
import { HeaderContext, HeaderContextProps } from "../contexts/HeaderContext";

const useHeaderBlocker = (): HeaderContextProps => useContext(HeaderContext)

export default useHeaderBlocker