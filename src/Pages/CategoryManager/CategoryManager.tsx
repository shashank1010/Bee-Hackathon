import { useCallback } from "react";
import { Button, CategoryForm } from "../../components";
import { addCategory } from "../../redux/actions";
import { useAppSelector, useAppDispatch, } from "../../redux/store"

export const CategoryManager = (props: any) => {

    const dispatch = useAppDispatch();
    const categories = useAppSelector((state) => state.categories.map(({ categoryId }) => categoryId));

    const handleAddCategory = useCallback(() => dispatch(addCategory()), []);
    
    return (
        <>
            {categories.map((categoryId) => <CategoryForm categoryId={categoryId} key={categoryId} />)}
            <Button onClick={handleAddCategory}>Add Category</Button>
        </>
    )
}