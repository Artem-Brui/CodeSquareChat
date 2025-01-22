import { createContext } from "react";
import { mainContextType } from "./types";

export const Context = createContext<mainContextType | null>(null);
