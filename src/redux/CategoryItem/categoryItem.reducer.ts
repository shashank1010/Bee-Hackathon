import { omit } from "lodash";
import type { Action } from "redux"
import { getUniqueId } from "../../utilities";
import { CategoryActions, CategoryItemActions } from "../actions";
import { CategoryItem } from "./types";

const categoryItemState = [] as CategoryItem[]

export const CategoryItemReducer = (state = categoryItemState, action: Action & { payload?: any }) => {
    switch (action.type) {
        case CategoryItemActions.ADD_ITEM:
            return [...state, { categoryId: action.payload.categoryId, fields: {}, itemId: getUniqueId() }];
        case CategoryItemActions.DELETE_ITEM:
            return state.filter(({ itemId }) => itemId !== action.payload.itemId);
        case CategoryItemActions.UPDATE_ITEM_FIELD:
            return state.map((item) => {
                if (item.itemId !== action.payload.itemId) {
                    return item;
                }

                return {
                    ...item,
                    fields: {
                        ...item.fields,
                        ...action.payload.fields
                    }
                }
            });
        case CategoryActions.DELETE_FIELD: {        
            return state.map((item) => {
                if (item.itemId !== action.payload.itemId) {
                    return item;
                }

                return {
                    ...item,
                    fields: omit(item.fields, action.payload.fieldId)
                }
            });
        }
        case CategoryActions.DELETE_CATEGORY:
            return state.filter(({ categoryId }) => categoryId !== action.payload.categoryId);
    }

    return state;
}