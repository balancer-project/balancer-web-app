import { Accordion, Badge, Col, Container, Row } from "react-bootstrap"
import { PiCoinsLight, PiEyeLight, PiEyeSlashLight } from "react-icons/pi"
import { capitalize } from "../../../helpers/String"
import { OneTimeExpenseStatus } from "../../../models/OneTimeExpenseStatus"
import { PaymentsList } from "./PaymentsList"

export const OneTimeExpenseBody = ({
  oneTimeExpenseStatus,
  category,
  recipient,
  concept,
  comments,
  amount,
  amountType,
  paymentMethod,
  hiddenInPlans,
  payment,
  createdAt,
  updatedAt
}) => {
  return (
    <Accordion.Body>
      <Container className="body one-time py-3">
        <Row className="mb-4">
          <Col xs="7">
            <h1 className="amount mb-2">-{amount.toFixed(2)} €</h1>
            <h4 className="concept mb-2">{concept}</h4>
            <span className="text-muted">Cantidad {amountType.humanName}</span>
          </Col>
          <Col>
            <div className="mb-1">
              <Col>
                <PiCoinsLight /> Puntual
                <Badge className="ms-2" bg={oneTimeExpenseStatus === OneTimeExpenseStatus.Done ? "success" : "secondary"}>
                  {capitalize(oneTimeExpenseStatus.humanName)}
                </Badge>
              </Col>
            </div>
            <div>
              {category.icon} {capitalize(category.humanName)}
            </div>
          </Col>
        </Row>
        <PaymentsList payments={[payment]} single />
        { comments !== "" ?
          <div className="small mb-3">
            <p className="text-muted">Comentarios</p>
            <div><p>{comments}</p></div>
          </div>
        : <></> }
        <Row className="text-muted small mb-3">
          <Col xs={3}>Destinatario</Col>
          <Col>{recipient.name}</Col>
          <Col xs={3}>Método de pago</Col>
          <Col>{paymentMethod.humanName}</Col>
        </Row>
        <div className="text-muted small">
          {hiddenInPlans ? <PiEyeSlashLight /> : <PiEyeLight />} {hiddenInPlans ? "No se" : "Se"} muestra en las planificaciones
        </div>
      </Container>
    </Accordion.Body>
  )
}
