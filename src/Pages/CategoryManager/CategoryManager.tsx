import { useCallback } from "react";
import { Button, CategoryForm } from "../../components";
import { useCategories, } from "../../components/CategoryForm/useCategory";
import { addCategory } from "../../redux/actions";
import { useAppDispatch, } from "../../redux/store"

export const CategoryManager = (props: any) => {

    const dispatch = useAppDispatch();
    const categories = useCategories<string[]>((categories) => categories.map(({ categoryId }) => categoryId));

    const handleAddCategory = useCallback(() => dispatch(addCategory()), []);
    
    return (
        <>
            {categories.map((categoryId) => <CategoryForm categoryId={categoryId} key={categoryId} />)}
            <Button onClick={handleAddCategory}>Add Category</Button>
        </>
    )
}