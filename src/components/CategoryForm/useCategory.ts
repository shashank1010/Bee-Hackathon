import { find, isEqual } from "lodash"
import { Category } from "../../redux/Category/types"
import { useAppSelector } from "../../redux/store"

export const useCategories = <T>(getProps: (x: Category[]) => T) => {
    return useAppSelector((state) => getProps(state.categories), isEqual) as T
}

export const useCategory = <T>({ categoryId }: Pick<Category, "categoryId">, getProps: (x: Category) => T) => {
    return useCategories((categories) => getProps(find(categories, {categoryId}) as Category)) as T
}