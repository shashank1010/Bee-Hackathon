import { omit } from "lodash";
import { FC, useCallback } from "react";
import { Card, Col } from "react-bootstrap";
import styled from "styled-components";
import { useCategory } from "../../components/CategoryForm/useCategory";
import { useCategoryItem } from "./useCategoryItem";
import { TrashFill } from 'react-bootstrap-icons';
import { useAppDispatch } from "../../redux/store";
import { deleteItem } from "../../redux/actions";
import { InventoryFields } from "./InventoryFields";


const StyledCard = styled(Card)`
    width: 100%;
`

const Header = styled(Card.Header)`
    display: flex;
`

const Title = styled(Card.Title)`
    flex-grow: 1;
    margin-bottom: 0;
`

const CloseIcon = styled(TrashFill)`
    flex-shrink: 0;
    height: 24px;
    cursor: pointer;
`

export const InventoryForm: FC<{itemId: string, categoryId: string}> = ({ itemId, categoryId }) => {
    const dispatch = useAppDispatch();
    const category = useCategory({ categoryId }, (category) => ({ categoryModelTitleId: category.categoryModelTitleId }));
    const item = useCategoryItem({ categoryId, itemId }, (item) => ({ ...omit(item, "fields"), modelTitle: item.fields[category.categoryModelTitleId] }))

    const handleDeleteItem = useCallback(() => dispatch(deleteItem({ itemId })), [])


    return (
        <Col>
            <StyledCard>
                <Header>
                    <Title>
                        {item.modelTitle}
                    </Title>
                    <CloseIcon onClick={handleDeleteItem} />
                </Header>
                <Card.Body>
                    <InventoryFields categoryId={categoryId} itemId={itemId} />
                </Card.Body>
            </StyledCard>
        </Col>
    );
}