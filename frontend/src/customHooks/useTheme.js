import { useContext } from "react";
import Context from "../context/service";

export default function useTheme() {
  const context = useContext(Context);

  if (!context) {
    throw new Error("Context not found...");
  }

  const { colorMode, updateColorMode } =
    context;

  const colorModeContext = {
    colorMode,
    updateColorMode,
  };

  if (!context) {
    throw new Error("Context is not defined!!..");
  }

  return colorModeContext;
}
