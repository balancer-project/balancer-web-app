import "bootstrap/dist/css/bootstrap.min.css";
import { useRoutes } from "react-router";
import { MainContextProvider } from "./context/MainContext";
import "./css/app.css";
import { routes } from "./routes";

const App = () => {
  let routesElement = useRoutes(routes)

  return (
    <MainContextProvider>
      {routesElement}
    </MainContextProvider>
  )
}

export default App
