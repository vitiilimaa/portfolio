import { useContext } from "react";
import { HeaderContext } from "../contexts/HeaderContext";

const useHeaderBlocker = () => useContext(HeaderContext)

export default useHeaderBlocker