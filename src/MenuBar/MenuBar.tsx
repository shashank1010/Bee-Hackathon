import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

const RouterLink: typeof Nav.Link = (props) => {
    return <Nav.Link { ...props } as={Link} />
}

export const MenuBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Inventorizilla</Navbar.Brand>
                <Navbar.Toggle aria-controls="inventory-zilla-nav" />
                <Navbar.Collapse id="inventory-zilla-nav">
                    <Nav>
                        <RouterLink as={Link} to="/">All</RouterLink>
                        <RouterLink as={Link} to="/manage-types">Manage Types</RouterLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}