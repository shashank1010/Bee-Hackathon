import type { Action } from "redux"
import { FieldTypes, getUniqueId } from "../../utilities";
import { CategoryActions } from "../actions";
import { Category } from "./types";

const categoryState = [] as Category[]

const prepareNewField = ({ name = "", type = FieldTypes.TEXT } = {}) => {
    return {
        name,
        type,
        fieldId: getUniqueId(),
    }
}

const normalizeCategory = (category?: Partial<Category>) => {
    const fields = category?.fields ?? [prepareNewField({ name: "Title" })];

    return {
        name: category?.name || "New Category",
        categoryModelTitleId: category?.categoryModelTitleId || fields[0]?.fieldId,
        categoryId: category?.categoryId || getUniqueId(),
        fields,
    } as Category
}

export const CategoryReducer = (state = categoryState, action: Action & { payload?: any } ) => {
    switch (action.type) {
        case CategoryActions.ADD_CATEGORY:
            return state.concat(normalizeCategory())
        case CategoryActions.DELETE_CATEGORY:
            return state.filter(({ categoryId }) => categoryId !== action.payload.categoryId);
        case CategoryActions.UPDATE_CATEGORY_NAME: {
            const categoryIndex = state.findIndex(({ categoryId }) => categoryId === action.payload.categoryId),
                  category = state.at(categoryIndex);

            state = [...state]
            state.splice(categoryIndex, 1, { ...category, name: action.payload.name } as Category)
            return state;
        }
        case CategoryActions.UPDATE_CATEGORY_MODEL_TITLE: {
            const categoryIndex = state.findIndex(({ categoryId }) => categoryId === action.payload.categoryId),
                  category = state.at(categoryIndex);
            
            state = [ ...state ];
            state.splice(categoryIndex, 1, { ...category, categoryModelTitleId: action.payload.categoryModelTitleId } as Category)
            return state;
        }
        case CategoryActions.ADD_FIELD: {
            const categoryIndex = state.findIndex(({ categoryId }) => categoryId === action.payload.categoryId),
                  category = state.at(categoryIndex);

            state = [ ...state ];
            state.splice(categoryIndex, 1, { ...category, fields: [...normalizeCategory(category).fields, prepareNewField({ type: action.payload.fieldType })] } as Category)

            return state;
        }
        case CategoryActions.UPDATE_FIELD:
            return state;
        case CategoryActions.DELETE_FIELD:
            return state;
    }
    
    return state;
}