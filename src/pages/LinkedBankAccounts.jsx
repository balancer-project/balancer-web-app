import { useEffect, useState } from "react"
import { Button, Col, Container, Row } from "react-bootstrap"
import { TfiReload } from "react-icons/tfi"
import { BankLinkApi } from "../api/BankLinkApi"
import { BankLinksList } from "../components/bank-links/bank-links-list/BankLinksList"
import { settings } from "../constants/settings"
import useDocumentTitle from "../hooks/useDocumentTitle"

export const LinkedBankAccounts = () => {
  useDocumentTitle("Mis cuentas bancarias – Balancer")

  const [bankLinks, setBankLinks] = useState([])
  const [loading, setLoading] = useState(false)
  const [preloaded, setPreloaded] = useState(false)

  const loadBankLinks = () => {
    setLoading(true)

    BankLinkApi
      .findAllBankLinks(settings.defaultUser.id)
      .then(response => setBankLinks(response))
      .finally(() => {
        setLoading(false)
        setPreloaded(true)
      })
  }

  useEffect(loadBankLinks, [])

  return (
    <article>
      <Container className="align-items-center">
        <Row>
          <Col><h1 className="mb-4">Mis cuentas bancarias</h1></Col>
          <Col className="text-end"><Button disabled={!preloaded || loading} variant="secondary" onClick={loadBankLinks}><TfiReload /> Actualizar</Button></Col>
        </Row>
      </Container>
      <Container style={{maxWidth: "970px"}}>
        <Row className="justify-content-center">
          <Col>
            <BankLinksList bankLinks={bankLinks} loading={loading} />
          </Col>
        </Row>
      </Container>
    </article>
  )
}
