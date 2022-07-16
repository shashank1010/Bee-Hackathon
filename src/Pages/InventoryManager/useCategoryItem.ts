import { find, isEqual } from "lodash"
import { Category } from "../../redux/Category/types"
import { CategoryItem } from "../../redux/CategoryItem/types"
import { useAppSelector } from "../../redux/store"

export const useAllItems = <T>(getProps: (x: CategoryItem[]) => T) => {
    return useAppSelector((state) => getProps(state.categoryItems), isEqual) as T
}

export const useCategoryItems = <T>({categoryId}: Pick<CategoryItem, "categoryId">, getProps: (x: CategoryItem[]) => T) => {
    return useAllItems((categoryItems) => getProps(categoryItems.filter((item) => item.categoryId === categoryId))) as T
}

export const useCategoryItem = <T>({ categoryId, itemId }: Pick<CategoryItem, "categoryId" | "itemId">, getProps: (x: CategoryItem) => T) => {
    return useCategoryItems({categoryId}, (categoryItem) => getProps(find(categoryItem, {itemId}) as CategoryItem)) as T
}