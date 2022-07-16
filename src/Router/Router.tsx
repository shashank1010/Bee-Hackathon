import type { FC } from "react";
import { Routes, Route } from "react-router-dom"
import { useCategories } from "../components/CategoryForm/useCategory";
import { Home, InventoryManager, CategoryManager } from "../Pages";
import { Category } from "../redux/Category/types";

export const Router: FC<any> = (props) => {
    const categories = useCategories<string[]>((categories) => categories.map(({ categoryId }) => (categoryId)))
    
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/manage-types" element={<CategoryManager />} />
            {
                categories.map((categoryId) => <Route path="/types/" key={categoryId} element={<InventoryManager categoryId={categoryId} />} />)
            }
        </Routes>
    )
}