import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useCategories } from "../components/CategoryForm/useCategory"
import { Category } from "../redux/Category/types"

const RouterLink: typeof Nav.Link = (props) => {
    return <Nav.Link { ...props } eventKey={props.to} as={Link} />
}

type CategoryPart = Pick<Category, "categoryId" | "name"> 

export const MenuBar = () => {
    const categories = useCategories<CategoryPart[]>((categories) => categories.map(({ categoryId, name }) => ({categoryId, name}) as CategoryPart))
    const categoryLinks = categories.map((category) => (
        <RouterLink key={category.categoryId} as={Link} to={`type/${category.categoryId}`}>{category.name}</RouterLink>
    ))

    return (
        <Navbar bg="light" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand as={Link} to="/">InventorZilla</Navbar.Brand>
                <Navbar.Toggle aria-controls="inventory-zilla-nav" />
                <Navbar.Collapse id="inventory-zilla-nav">
                    <Nav>
                        <RouterLink as={Link} to="/">All</RouterLink>
                        {categoryLinks }
                        <RouterLink as={Link} to="/manage-types">Manage Types</RouterLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}