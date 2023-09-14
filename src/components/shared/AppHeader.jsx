import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap"

export const AppHeader = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-5">
      <Container>
        <Navbar.Brand href="/">Balancer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="app-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <NavDropdown title="Gastos" id="expenses-nav-dropdown">
              <NavDropdown.Item href="/expenses">Mis gastos</NavDropdown.Item>
              <NavDropdown.Item href="/expenses/recurring/add">Nuevo gasto recurrente</NavDropdown.Item>
              <NavDropdown.Item href="/expenses/one-time/add">Nuevo gasto puntual</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Cuentas bancarias" id="bank-accounts-nav-dropdown">
              <NavDropdown.Item href="/bank-accounts">Mis cuentas</NavDropdown.Item>
              <NavDropdown.Item href="/bank-accounts/link">Asociar cuenta</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
