import { AppHeader } from "../components/shared/AppHeader";
import { AppFooter } from "../components/shared/AppFooter";
import { createContext } from "react";
import Container from "react-bootstrap/Container";

export const MainContext = createContext(undefined)

export const MainContextProvider = ({ children }) => {
  return (
    <MainContext.Provider value={{ }}>
      <AppHeader />
      <Container>
        {children}
      </Container>
      <AppFooter />
    </MainContext.Provider>
  )
}
