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
            state.splice(categoryIndex, 1, {
                ...category,
                    fields: [
                    ...normalizeCategory(category).fields,
                    prepareNewField({ type: action.payload.fieldType })
                ]
            } as Category)

            return state;
        }

        case CategoryActions.UPDATE_FIELD: {
            let categoryIndex = state.findIndex(({ categoryId }) => categoryId === action.payload.categoryId),
                  category = state.at(categoryIndex) as Category,
                  fieldIndex = category.fields.findIndex(({ fieldId }) => fieldId === action.payload.field.fieldId);

            state = [ ...state ];

            category = {
                ...category,
                fields: [...category.fields]
            }

            category.fields.splice(fieldIndex, 1, action.payload.field);
            
            state.splice(categoryIndex, 1, category);

            return state;
        }
        case CategoryActions.DELETE_FIELD:{
            let categoryIndex = state.findIndex(({ categoryId }) => categoryId === action.payload.categoryId),
                  category = state.at(categoryIndex) as Category,
                  fields = category.fields.filter(({ fieldId }) => fieldId !== action.payload.fieldId);

            state = [ ...state ];

            category = {
                ...category,
                categoryModelTitleId: category.categoryModelTitleId === action.payload.fieldId ? "" : category.categoryModelTitleId,
                fields
            }

            state.splice(categoryIndex, 1, normalizeCategory(category));

            return state;
        }
    }
    
    return state;
}