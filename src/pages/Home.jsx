import { PiArrowRight } from "react-icons/pi"
import useDocumentTitle from "../hooks/useDocumentTitle"
import piggyImg from "../images/piggy.svg"

export const Home = () => {
  useDocumentTitle("Balancer – Balancer")

  return (
    <article className="text-center py-5">
      <img style={{width: "10rem"}} src={piggyImg} alt="Piggy" className="mb-5" />
      <h1 className="mb-5">¡Hola, Juan!</h1>
      <p className="mb-5">Bienvenido a Balancer, ¿comenzamos?</p>
      <a className="btn btn-outline-dark" href="/expenses">Ver mis gastos <PiArrowRight /></a>
    </article>
  )
}
