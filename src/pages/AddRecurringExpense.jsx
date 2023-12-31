import { useState } from "react"
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap"
import { useForm } from "react-hook-form"
import { PiArrowRight } from "react-icons/pi"
import { useNavigate } from "react-router-dom"
import { ExpensesApi } from "../api/ExpensesApi"
import { SuccessCard } from "../components/shared/SuccessCard"
import { settings } from "../constants/settings"
import { capitalize } from "../helpers/String"
import useDocumentTitle from "../hooks/useDocumentTitle"
import piggyLoopImg from "../images/piggy-loop.svg"
import { ExpenseCategory } from "../models/ExpenseCategory"
import { ExpensePaymentMethod } from "../models/ExpensePaymentMethod"
import { RecurringExpenseFrequencyType } from "../models/RecurringExpenseFrequencyType"
import { RecurringExpenseStatus } from "../models/RecurringExpenseStatus"

export const AddRecurringExpense = () => {
  useDocumentTitle("Nuevo gasto recurrente – Balancer")

  const { register, watch, formState, handleSubmit } = useForm()
  const [ loading, setLoading ] = useState(false)
  const [ added, setAdded ] = useState(false)

  const watchFrequencyType = watch("frequencyType")

  const navigate = useNavigate()

  const submit = (data) => {
    setLoading(true)
    ExpensesApi.registerExpense(settings.defaultUser.id,{
      type: "recurring",
      recurringExpenseStatus: RecurringExpenseStatus.Active.name,
      category: data.category,
      recipientId: settings.defaultRecipient.id,
      concept: data.concept,
      amount: data.amount,
      amountType: data.amountType,
      paymentMethod: data.paymentMethod,
      frequency: {
        type: data.frequencyType,
        parameter: data.frequencyParameter ? parseInt(data.frequencyParameter) : null
      },
      firstPaymentDate: data.firstPaymentDate,
      hiddenInPlans: !data.shownInPlans
    })
      .then((response) => {
        console.log(response)
        setLoading(false)
        setAdded(true)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
  }

  return (
    <article>
      <Container className="align-items-center">
        <Row>
          <Col><h1 className="mb-4">Nuevo gasto recurrente</h1></Col>
        </Row>
      </Container>
      <Container style={{maxWidth: "485px"}}>
        <Row className="justify-content-center">
          <Col>

            <div className="text-center">
              <img style={{width: "11rem"}} src={piggyLoopImg} alt="Piggy" className="ms-4 mb-4" />
            </div>

            <div className={`loader-wrapper mb-3 ${!loading && "hidden"}`}>
              <div className="loader-line"></div>
            </div>

            {!added &&
            <Form onSubmit={handleSubmit(submit)}>
              <Form.Group className="mb-3">
                <Form.Label>Categoría</Form.Label>
                <Form.Select aria-label="Categoría" {...register("category", {
                  validate: (value) => value !== "null"
                })} defaultValue={"null"}>
                  <option value="null" disabled>Selecciona una...</option>
                  {ExpenseCategory.values().map((category) => (
                    <option key={category.name} value={category.name}>{capitalize(category.humanName)}</option>
                  ))}
                </Form.Select>
                {formState.errors?.category && <Form.Text className="text-danger">Selecciona una categoría</Form.Text>}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Concepto</Form.Label>
                <Form.Control type="text" placeholder="Concepto" {...register("concept", {
                  required: true
                })} />
                {formState.errors?.concept && <Form.Text className="text-danger">Introduce un concepto</Form.Text>}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Cantidad</Form.Label>
                <InputGroup>
                  <Form.Select aria-label="Tipo..." {...register("amountType")}>
                    <option value="fixed">Fija</option>
                    <option value="estimated">Aproximada</option>
                  </Form.Select>
                  <Form.Control type="number" placeholder="Cantidad" {...register("amount", {
                    required: true
                  })} />
                  <InputGroup.Text>€</InputGroup.Text>
                </InputGroup>
                {formState.errors?.amount && <Form.Text className="text-danger">Introduce una cantidad</Form.Text>}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Método de pago</Form.Label>
                <Form.Select aria-label="Método de pago" {...register("paymentMethod", {
                  validate: (value) => value !== "null"
                })} defaultValue={"null"}>
                  <option value="null" disabled>Selecciona uno...</option>
                  {ExpensePaymentMethod.values().map((paymentMethod) => (
                    <option key={paymentMethod.name} value={paymentMethod.name}>{capitalize(paymentMethod.humanName)}</option>
                  ))}
                </Form.Select>
                {formState.errors.paymentMethod && <Form.Text className="text-danger">Selecciona un método de pago</Form.Text>}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Frecuencia</Form.Label>
                <InputGroup>
                  <Form.Select aria-label="Tipo..." {...register("frequencyType", {
                    validate: (value) => value !== "null"
                  })} defaultValue={"null"}>
                    <option value="null" disabled>Selecciona un tipo...</option>
                    {RecurringExpenseFrequencyType.values().map((frequencyType) => (
                      <option key={frequencyType.name} value={frequencyType.name}>{capitalize(frequencyType.selectName)}</option>
                    ))}
                  </Form.Select>
                  {
                    RecurringExpenseFrequencyType.needsParameter(watchFrequencyType) &&
                      <Form.Control type="number" placeholder="Día" {...register("frequencyParameter", { required: true })} />
                  }
                </InputGroup>
                {formState.errors.frequencyType && <Form.Text className="text-danger">Selecciona un tipo de frecuencia</Form.Text>}
                {RecurringExpenseFrequencyType.needsParameter(watchFrequencyType) &&
                  formState.errors.frequencyParameter &&
                  <Form.Text className="text-danger">Introduce un día</Form.Text>}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Comienzo</Form.Label>
                <Form.Control type="date" placeholder="Comienzo" {...register("firstPaymentDate", {required: true})} />
                {formState.errors.firstPaymentDate && <Form.Text className="text-danger">Introduce una fecha de inicio</Form.Text>}
              </Form.Group>

              <Form.Group className="mb-5">
                <Form.Check type="checkbox" label="Mostrar en las planificaciones mensuales" {...register("shownInPlans")} defaultChecked={true} />
              </Form.Group>

              <div className="text-end">
                <Button variant="primary" type="submit">Añadir</Button>
              </div>
            </Form>
            }

            {added && <SuccessCard text="Has añadido un gasto recurrente." button={
              <Button variant="outline-dark" onClick={() => navigate("/expenses")}>Ver mis gastos <PiArrowRight /></Button>
            } />}
          </Col>
        </Row>
      </Container>
    </article>
  )
}
