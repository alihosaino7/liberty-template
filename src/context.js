

import { createContext, useContext } from "react";

export const UserContext = createContext(null)

export const useGlobalContext = () => {
   return useContext(UserContext)
}