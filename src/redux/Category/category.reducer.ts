import type { Action } from "redux"

const categoryState = {
    categoryItems: []
}

export const CategoryReducer = (state = categoryState, action: Action) => {
    return state;
}