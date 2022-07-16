import { FC, useCallback } from "react";
import { InventoryForm } from "./InventoryForm";
import { useCategoryItems } from "./useCategoryItem";
import { Button, } from "../../components";
import { useAppDispatch } from "../../redux/store";
import { addItem } from "../../redux/actions";
import styled from "styled-components";
import { Col, Row } from "react-bootstrap";


const StyledRow = styled(Row)`
    width: 100%;
    flex-wrap: wrap;
    row-gap: 30px;
    margin: 0 0 30px;
    padding: 0;

`

const StyledCol = styled(Col)`
    max-width: var(--column-width);
    display: flex;
    flex: 1 0 var(--column-width);

    --column-width: 100%;
    @media (min-width: 400px) {
        --column-width: 50%;
    }
    @media (min-width: 992px) {
        --column-width: 25%;
    }
`

const ButtonCol = styled(StyledCol)`
    align-self: flex-start;
`

const StyledHeader = styled.h2`
    font-size: 2em;
    line-height: 1.2;
    margin: 0 0 15px;
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
    position: sticky;
    top: 56px;
    z-index: 1000;
    background: #fff;

`

export const InventoryManager: FC<{ categoryId: string, categoryName: string }> = ({ categoryId, categoryName, }) => {
    const dispatch = useAppDispatch();
    const items = useCategoryItems({ categoryId }, (categoryItems) => categoryItems.map(({ itemId }) => ({ itemId})));

    const handleAddItem = useCallback(() => dispatch(addItem({ categoryId })), [categoryId])
    
    return (
        <>
            <StyledHeader>{categoryName || "Unnamed Category"}</StyledHeader>
            <StyledRow>
                {items.map((item) => <StyledCol key={item.itemId}><InventoryForm itemId={item.itemId} categoryId={categoryId} /></StyledCol>)}
                <ButtonCol>
                    <Button onClick={handleAddItem}>Add Item</Button>
                </ButtonCol>
            </StyledRow>
        </>
    );
}