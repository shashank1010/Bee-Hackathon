import React, { FC, useMemo } from "react";
import { Row } from "react-bootstrap";
import { Category, CategoryField } from "../../redux/Category/types";
import { useAppDispatch } from "../../redux/store";
import { find, remove } from "lodash";
import { removeField, updateField } from "../../redux/actions";
import { Dropdown, Input } from "../Fields";
import { useCategory } from "./useCategory";
import { fieldTypesOptions } from "./fieldTypeOptions";
import { FieldTypes } from "../../utilities";



const CategoryFieldComponent: FC<CategoryField & Record<"categoryId", string>> = ({ type, name, fieldId, categoryId }) => {
    const options = useMemo(() => [...fieldTypesOptions, { value: "remove", "label": "Remove" } ], [fieldTypesOptions])
    
    const dispatch = useAppDispatch();

    const onChange = (field: CategoryField) => dispatch(updateField({ categoryId, field }));
    const onRemoveField = () => dispatch(removeField({ categoryId, fieldId }));

    const handleUpdateLabel = (name: string) => {
        onChange({ fieldId, type, name })
    }

    const handleUpdateType = (type: string) => {
        switch (type) {
            case"remove": return onRemoveField();
            default: return onChange({ fieldId, name, type: type as FieldTypes })
        }
    }


    return (
        <Row>
            
            {
                // @ts-ignore
                <Input type="text" value={ name } onChange={handleUpdateLabel}>
                    <Dropdown label="" value={ type } onChange={handleUpdateType} options={options} />
                </Input>
            }
        </Row>
    );
}


export const CategoryFields: FC<Pick<Category, "categoryId">> = ({categoryId}) => {
    const fields = useCategory<CategoryField[]>({ categoryId }, ({ fields}) => fields);
    return (
        <>
        {fields.map((field) => <CategoryFieldComponent key={field.fieldId} { ...field } categoryId={categoryId} />)}
        </>
    );
}