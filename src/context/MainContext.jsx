import { AppHeader } from "../components/shared/AppHeader";
import { AppFooter } from "../components/shared/AppFooter";
import { createContext, useEffect, useRef, useState } from "react";

export const MainContext = createContext(undefined)

export const MainContextProvider = ({ children }) => {
  return (
    <MainContext.Provider value={{ }}>
      <AppHeader />
      {children}
      <AppFooter />
    </MainContext.Provider>
  )
}
