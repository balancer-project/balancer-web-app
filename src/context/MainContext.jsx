import { createContext } from "react";
import Container from "react-bootstrap/Container";
import { AppFooter } from "../components/shared/AppFooter";
import { AppHeader } from "../components/shared/AppHeader";

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
