import { useEffect, useState } from "react"
import Button from "react-bootstrap/Button"
import { PiArrowRight } from "react-icons/pi"
import { usePlaidLink } from "react-plaid-link"
import { useNavigate } from "react-router-dom"
import { BankLinkApi } from "../api/BankLinkApi"
import { SuccessCard } from "../components/shared/SuccessCard"
import { settings } from "../constants/settings"
import useDocumentTitle from "../hooks/useDocumentTitle"
import bankAccountImg from "../images/bank-account.svg"

export const LinkBankAccount = () => {
  useDocumentTitle("Asociar cuenta bancaria – Balancer")

  const navigate = useNavigate()

  const [linkToken, setLinkToken] = useState(null)
  const [accountLinked, setAccountLinked] = useState(false)

  const onSuccess = async (publicToken, metadata) => {
    console.log("Plaid Link success")
    console.log("Setting publicToken", publicToken)
    console.log("With metadata", metadata)
    await BankLinkApi.setPublicToken(settings.defaultUser.id, metadata.institution.institution_id, publicToken)
    console.log("Public token set")
    setAccountLinked(true)
  }

  const { open, ready } = usePlaidLink({
    token: linkToken,
    onSuccess: onSuccess
  })

  const preparePlaidLink = async () => {
    console.log(`Preparing Plaid Link for user ${settings.defaultUser.id}`)
    const linkToken = await BankLinkApi.createLinkToken(settings.defaultUser.id)
    console.log(`Got link token: ${linkToken}`)
    setLinkToken(linkToken)
    console.log("Plaid Link ready")
  }

  useEffect(() => preparePlaidLink, [])

  return (
    <article className="text-center">
      <img src={bankAccountImg} alt="Cuenta bancaria" className="mt-5 mb-5" style={{width: "10rem"}} />
      <div className="mb-5">
        {
          accountLinked ? (
            <SuccessCard text="Tu cuenta bancaria está asociada." button={
              <Button variant="outline-dark" onClick={() => navigate("/bank-accounts")}>Ver mis cuentas <PiArrowRight /></Button>
            } />
          ) :
          <>
            <h1 className="mb-4">Asociar una cuenta bancaria</h1>
            <p>Asocia una cuenta bancaria para conocer de forma instantánea actualizaciones sobre tus gastos.</p>
            <p className="mt-5"><Button variant="outline-dark" onClick={open} disabled={!ready}>Conectar una cuenta bancaria</Button></p>
          </>
        }
      </div>
    </article>
  )
}
