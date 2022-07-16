import { useCallback } from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { Button, CategoryForm } from "../../components";
import { useCategories, } from "../../components/CategoryForm/useCategory";
import { addCategory } from "../../redux/actions";
import { useAppDispatch, } from "../../redux/store"

const StyledRow = styled(Row)`
    width: 100%;
    flex-wrap: wrap;
    row-gap: 30px;
    margin: 0;
`

const StyledCol = styled(Col)`
    max-width: 25%;
    display: flex;
    flex: 1 0 25%;
`

const ButtonCol = styled(StyledCol)`
    align-self: flex-start;
`

export const CategoryManager = (props: any) => {

    const dispatch = useAppDispatch();
    const categories = useCategories<string[]>((categories) => categories.map(({ categoryId }) => categoryId));

    const handleAddCategory = useCallback(() => dispatch(addCategory()), []);
    
    return (
        <StyledRow>
            {categories.map((categoryId) => <StyledCol key={categoryId} ><CategoryForm categoryId={categoryId} /></StyledCol>)}
            <ButtonCol>
                <Button onClick={handleAddCategory}>Add Category</Button>
            </ButtonCol>
        </StyledRow>
    )
}