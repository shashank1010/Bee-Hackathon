import type { FC } from "react";
import { Routes, Route } from "react-router-dom"
import { Home, InventoryManager, CategoryManager } from "../Pages";

export const Router: FC<any> = () => (
    <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/manage-types" element={<CategoryManager />} />
    </Routes>
)