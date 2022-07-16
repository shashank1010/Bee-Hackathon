import { CategoryField } from "../Category/types"

export enum CategoryActions {
    ADD_CATEGORY = "ADD_CATEGORY",
    DELETE_CATEGORY = "DELETE_CATEGORY",
    ADD_FIELD = "ADD_FIELD",
    UPDATE_FIELD = "UPDATE_FIELD",
    DELETE_FIELD = "DELETE_FIELD",
    UPDATE_CATEGORY_NAME = "UPDATE_CATEGORY_NAME",
    UPDATE_CATEGORY_MODEL_TITLE = "UPDATE_CATEGORY_MODEL_TITLE",
}

export const addCategory = () => ({
    type: CategoryActions.ADD_CATEGORY
})
export const deleteCategory = (payload: { categoryId: string }) => ({
    type: CategoryActions.DELETE_CATEGORY, payload
})


export const addField = (payload: {
    categoryId: string;
    fieldType: string;
}) => ({ type: CategoryActions.ADD_FIELD, payload })


export const removeField = (payload: {
    categoryId: string;
    fieldId: string;
}) => ({ type: CategoryActions.DELETE_FIELD, payload })


export const updateField = (payload: {
    categoryId: string;
    field: CategoryField;
}) => ({ type: CategoryActions.UPDATE_FIELD, payload })


export const updateCategoryName = (payload: {
    categoryId: string;
    name: string;
}) => ({ type: CategoryActions.UPDATE_CATEGORY_NAME, payload })


export const updateCategoryModelTitle = (payload: {
    categoryId: string;
    categoryModelTitleId: string;
}) => ({ type: CategoryActions.UPDATE_CATEGORY_MODEL_TITLE, payload })