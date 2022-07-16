import type { Action } from "redux"
import { CategoryActions, CategoryItemActions } from "../actions";
import { CategoryItem } from "./types";

const categoryItemState = [] as CategoryItem[]

export const CategoryItemReducer = (state = categoryItemState, action: Action & { payload?: any }) => {
    switch (action.type) {
        case CategoryItemActions.ADD_ITEM:
            return state;
        case CategoryItemActions.DELETE_ITEM:
            return state;
        case CategoryItemActions.UPDATE_ITEM_FIELD:
            return state;
        case CategoryActions.UPDATE_FIELD:
            return state;
        case CategoryActions.DELETE_FIELD:
            return state;
        case CategoryActions.DELETE_CATEGORY:
            return state.filter(({ categoryId }) => categoryId !== action.payload.categoryId);
    }

    return state;
}