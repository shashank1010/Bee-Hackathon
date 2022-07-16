import type { FC } from "react";
import { Routes, Route } from "react-router-dom"
import { useCategories } from "../components/CategoryForm/useCategory";
import { Home, InventoryPage, CategoryManager } from "../Pages";
import { Category } from "../redux/Category/types";

const PageNotFound = () => <>Page not found</>

export const Router: FC<any> = (props) => {
    const categories = useCategories<string[]>((categories) => categories.map(({ categoryId }) => (categoryId)))
    
    return (
        <Routes>
            <Route index element={<InventoryPage />} />
            <Route path="/" element={<InventoryPage />} />
            <Route path="*" element={<PageNotFound />} />

            <Route path="/manage-types" element={<CategoryManager />} />
            {
                categories.map((categoryId) => <Route path={`/type/${categoryId}`} key={categoryId} element={<InventoryPage categoryId={categoryId} />} />)
            }
        </Routes>
    )
}