import { useCallback, useEffect, useState } from "react"
import { createLinkToken } from "../api/LinkTokenApi"
import { settings } from "../constants/settings"
import useDocumentTitle from "../hooks/useDocumentTitle"
import { usePlaidLink } from "react-plaid-link"

export const LinkBankAccount = () => {
  useDocumentTitle("Asociar cuenta bancaria – Balancer")

  const [linkToken, setLinkToken] = useState(null)

  useEffect(() => {
    const callCreateLinkToken = async () => {
      const linkToken = await createLinkToken(settings.defaultUser.id)
      setLinkToken(linkToken)
    }

    // callCreateLinkToken()
  }, [])

  const onSuccess = useCallback((publicToken, metadata) => {
    // send public_token to your server
    // https://plaid.com/docs/api/tokens/#token-exchange-flow
    console.log(publicToken);
  }, [])

  console.log(linkToken)

  const { open, ready } = usePlaidLink({
    token: linkToken,
    onSuccess: onSuccess,
    // onEvent
    // onExit
  })

  return (
    <article>
      <h1>Asociar cuenta bancaria</h1>
      <p>Asocia una cuenta bancaria para conocer de forma instantánea actualizaciones sobre tus gastos.</p>
      <button onClick={() => open()} disabled={!ready}>Conectar una cuenta bancaria</button>
      <p>Link token: {linkToken}</p>
    </article>
  )
}
