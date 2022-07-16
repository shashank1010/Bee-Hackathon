import { FC } from "react";
import { Row } from "react-bootstrap";
import styled from "styled-components";
import { useCategories } from "../../components/CategoryForm/useCategory";
import { Category } from "../../redux/Category/types";
import { InventoryManager } from "./InventoryManager";


const StyledRow = styled(Row)`
    width: 100%;
    margin: 0 0 30px;

`

export const InventoryPage:FC<{categoryId?: string}> = ({ categoryId }) => {
    const categories = useCategories<Pick<Category, "name" | "categoryId">[]>(
        (categories) => categories
            .filter((category) => !categoryId || category.categoryId === categoryId )
            .map(({ categoryId, name }) => ({categoryId, name }))
    );

    return (
        <>
            {categories.map(({ name, categoryId}) => <StyledRow ><InventoryManager key={categoryId} categoryName={name} categoryId={categoryId} /></StyledRow>)}
        </>
    )
}