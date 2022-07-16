import { ChangeEventHandler, FC, useCallback, useMemo } from "react";
import { addField, deleteCategory, updateCategoryModelTitle, updateCategoryName } from "../../redux/actions";
import { useAppDispatch, useAppSelector } from "../../redux/store";

import { Card } from "../Card";
import { TrashFill } from 'react-bootstrap-icons';
import styled from "styled-components";
import {find, isEqual} from "lodash";
import { CategoryFields } from "./CategoryFields";
import { Category, CategoryField } from "../../redux/Category/types";
import { Input, Select, Dropdown } from "../Fields";
import { FieldTypes } from "../../utilities";
import { useCategory } from "./useCategory";
import { fieldTypesOptions } from "./fieldTypeOptions";


interface CategoryFormProps {
    categoryId: string
}

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

const ModelTitle: FC<Pick<Category, "categoryModelTitleId" | "categoryId"> & Record<"onChange", (x: string) => void>> = ({ categoryId, categoryModelTitleId, onChange }) => {
    const fields = useCategory<CategoryField[]>({ categoryId }, ({ fields }) => fields)
    const options = useMemo(() => fields.map(({ fieldId: value, name: label }) => ({ value, label })), [fields])

    if (!fields.length){
         return null;
    }

    return <Select label="Title Field" value={categoryModelTitleId} options={options} onChange={onChange} />
}



const AddFieldDropdown: FC<Pick<Category, "categoryId">> = ({ categoryId }) => {
    const dispatch = useAppDispatch();
    const handleAddField = useCallback((fieldType: string) => dispatch(addField({ categoryId, fieldType })), [ categoryId ]);

    return <Dropdown label="Add Field" options={fieldTypesOptions} onChange={ handleAddField } />
}

export const CategoryForm: FC<CategoryFormProps> = ({ categoryId }) => {
    const dispatch = useAppDispatch();
    const category = useCategory<Omit<Category, "fields">>({ categoryId }, ({ fields, ...category }: Category) => category)

    const handleDeleteCategory = useCallback(() => dispatch(deleteCategory({ categoryId })), [ categoryId ]);
    const handleUpdateTitle = useCallback((name: string) => dispatch(updateCategoryName({ categoryId, name })), [ categoryId ]);
    const handleUpdateModelTitle = useCallback((categoryModelTitleId: string) => dispatch(updateCategoryModelTitle({ categoryId, categoryModelTitleId })), [ categoryId ]);

    return (
        <Card>
            <Header>
                <Title>{ category.name }</Title>
                <CloseIcon onClick={handleDeleteCategory} />
            </Header>
            <Card.Body>
                <Input type="text" label="Name" value={category.name} onChange={ handleUpdateTitle } />
                <ModelTitle categoryId={categoryId} onChange={handleUpdateModelTitle} categoryModelTitleId={category.categoryModelTitleId} />
                <CategoryFields categoryId={categoryId} />
                <AddFieldDropdown categoryId={categoryId} />
            </Card.Body>
        </Card>
    )
}