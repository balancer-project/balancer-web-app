import { Accordion, Col, Container, Row } from "react-bootstrap"
import { PiDotsThreeBold, PiPiggyBankLight } from "react-icons/pi"
import { localizeDate } from "../../../helpers/DateTime"
import { FinancialInstitution } from "../../../models/FinancialInstitution"

export const BankLinksListItem = ({ bankLink, index }) => {
  const institution = FinancialInstitution.from(bankLink.institutionId)

  const randomBankEndings = [
    7456,
    8856,
    2364,
    8526,
    6493,
    9346
  ]

  return (
    <Accordion.Item className="bank-links-list-item" eventKey={bankLink.id}>
      <Accordion.Header>
        <Container>
          <Row className="align-items-center">
            <Col xs={1} className="p-0"><PiPiggyBankLight /></Col>
            <Col xs={1} className="p-0">
              <img className="institution-icon" src={institution.icon} alt={institution.name} />
            </Col>
            <Col className="p-0">{institution.name}</Col>
            <Col xs={2} className="text-end"><PiDotsThreeBold /> {randomBankEndings[index]}</Col>
          </Row>
        </Container>
      </Accordion.Header>
      <Accordion.Body>
        <Container className="body one-time py-3">
          <div className="text-center pt-2 pb-4 mb-3 border-bottom">
            <img className="institution-icon-big mb-3" src={institution.icon} alt={institution.name} />
            <h4 className="concept mb-2">{institution.name}</h4>
            <small className="text-muted"><PiDotsThreeBold /> {randomBankEndings[index]}</small>
          </div>
          <small className="text-muted">Asociada el {localizeDate(bankLink.createdAt)}</small>
        </Container>
      </Accordion.Body>
    </Accordion.Item>
  )
}
