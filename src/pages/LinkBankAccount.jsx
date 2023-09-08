import { useState } from "react"
import Button from "react-bootstrap/Button"
import { usePlaidLink } from "react-plaid-link"
import { BankLinkApi } from "../api/BankLinkApi"
import { settings } from "../constants/settings"
import useDocumentTitle from "../hooks/useDocumentTitle"

export const LinkBankAccount = () => {
  useDocumentTitle("Asociar cuenta bancaria – Balancer")

  const [linkToken, setLinkToken] = useState(null)

  const onSuccess = async (publicToken, metadata) => {
    console.log("Plaid Link success")
    console.log("Setting publicToken", publicToken)
    console.log("With metadata", metadata)
    await BankLinkApi.setPublicToken(settings.defaultUser.id, metadata.institution.institution_id, publicToken)
    console.log("Public token set")
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

  return (
    <div className="text-center">
      <h1 className="mb-4">Asociar cuenta bancaria</h1>
      <p>Asocia una cuenta bancaria para conocer de forma instantánea actualizaciones sobre tus gastos.</p>
      <p><Button variant="primary" onClick={preparePlaidLink}>Preparar Link</Button></p>
      <p><Button variant="primary" onClick={open} disabled={!ready}>Conectar una cuenta bancaria</Button></p>
    </div>
  )
}
