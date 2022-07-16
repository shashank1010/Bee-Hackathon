import { CategoryItem } from "../CategoryItem/types";

export enum CategoryItemActions {
    ADD_ITEM = "ADD_ITEM",
    DELETE_ITEM = "DELETE_ITEM",
    UPDATE_ITEM_FIELD = "UPDATE_ITEM_FIELD",
}


export const addItem = (payload: Pick<CategoryItem, "categoryId">) => ({
    type: CategoryItemActions.ADD_ITEM,
    payload
})


export const deleteItem = (payload: Pick<CategoryItem, "itemId">) => ({
    type: CategoryItemActions.DELETE_ITEM,
    payload,
})


export const updateCategoryItem = (payload: CategoryItem) => ({
    type: CategoryItemActions.UPDATE_ITEM_FIELD,
    payload,
})