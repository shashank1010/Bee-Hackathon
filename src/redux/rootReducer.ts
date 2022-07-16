import { combineReducers } from 'redux';
import { CategoryReducer } from './Category/category.reducer';
import { CategoryItemReducer } from './CategoryItem/categoryItem.reducer';


const rootReducer = combineReducers({
    categories: CategoryReducer,
    categoryItems: CategoryItemReducer,
});

export default rootReducer;