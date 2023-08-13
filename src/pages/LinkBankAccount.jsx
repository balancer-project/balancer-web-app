import { useState } from "react"
import { createLinkToken, setPublicToken } from "../api/BankAccountLinkApi"
import { settings } from "../constants/settings"
import { usePlaidLink } from "react-plaid-link"
import useDocumentTitle from "../hooks/useDocumentTitle"
import Button from "react-bootstrap/Button"

export const LinkBankAccount = () => {
  useDocumentTitle("Asociar cuenta bancaria – Balancer")

  const [linkToken, setLinkToken] = useState(null)

  const onSuccess = async (publicToken, metadata) => {
    console.log("Plaid Link success")
    console.log("Setting publicToken", publicToken)
    await setPublicToken(settings.defaultUser.id, publicToken)
    console.log("Public token set")
  }

  const { open, ready } = usePlaidLink({
    token: linkToken,
    onSuccess: onSuccess
  })

  const preparePlaidLink = async () => {
    console.log(`Preparing Plaid Link for user ${settings.defaultUser.id}`)
    const linkToken = await createLinkToken(settings.defaultUser.id)
    console.log(`Got link token: ${linkToken}`)
    setLinkToken(linkToken)
    console.log("Plaid Link ready")
  }

  return (
    <div className="text-center">
      <h1 className="mb-4">Asociar cuenta bancaria</h1>
      <p>Asocia una cuenta bancaria para conocer de forma instantánea actualizaciones sobre tus gastos.</p>
      <p><Button variant="primary" onClick={preparePlaidLink}>Preparar Link</Button></p>
      <p><Button variant="primary" onClick={open} disabled={!ready}>Conectar una cuenta bancaria</Button></p>
    </div>
  )
}
