import { useContext } from "react";
import Context from "../context/service";

export default function useRerender() {
  const context = useContext(Context);

  if (!context) {
    throw new Error("Context not found...");
  }

  const { rerender, updateRerender } =
    context;

  const rerenderContext = {
    rerender,
    updateRerender,
  };

  if (!context) {
    throw new Error("Context is not defined!!..");
  }

  return rerenderContext;
}
