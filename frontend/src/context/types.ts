import { ReactNode } from "react";

export type ChildrenType = {
  children: ReactNode;
}


export type mainContextType = {
  isLoggedIn: boolean,
  handleLoggedInStatus: (newStatus: boolean) => void,
}