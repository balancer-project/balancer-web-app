import { MainContextProvider } from "./context/MainContext";
import { routes } from "./routes";
import { useRoutes } from "react-router";
import "./css/app.css"

const App = () => {
  let routesElement = useRoutes(routes)

  return (
    <MainContextProvider>
      {routesElement}
    </MainContextProvider>
  )
}

export default App
