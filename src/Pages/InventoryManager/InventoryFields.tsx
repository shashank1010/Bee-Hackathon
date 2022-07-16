import { FC } from "react";
import { Row } from "react-bootstrap";
import { CategoryField, } from "../../redux/Category/types";
import { useAppDispatch } from "../../redux/store";
import { updateCategoryItem } from "../../redux/actions";
import { VariadicField } from "../../components";
import { CategoryItem } from "../../redux/CategoryItem/types";
import { useCategoryItem } from "./useCategoryItem";
import { useCategory } from "../../components/CategoryForm/useCategory";



const InventoryField: FC<CategoryField & { value: string } & Pick<CategoryItem, "itemId" | "categoryId">> = ({ itemId, categoryId, ...field }) => {
    const dispatch = useAppDispatch();

    const handleFieldUpdate = (value: string) => dispatch(updateCategoryItem({ categoryId, itemId, fields: { [field.fieldId]: value }}));

    return (
        <Row><VariadicField label={field.name } type={ field.type } value={field.value} onChange={handleFieldUpdate} /></Row>
    );
}


export const InventoryFields: FC<Pick<CategoryItem, "itemId" | "categoryId">> = ({ itemId, categoryId}) => {
    const categoryFields = useCategory({categoryId}, ({ fields }) => fields);
    const itemValues = useCategoryItem({ categoryId, itemId }, (x) => x.fields);
    return (
        <>
            {categoryFields.map((field) => <InventoryField key={field.fieldId} { ...field} value={itemValues[field.fieldId]} itemId={itemId} categoryId={categoryId} />)}
        </>
    );
}