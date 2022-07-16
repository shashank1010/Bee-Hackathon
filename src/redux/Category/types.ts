import { FieldTypes } from "../../utilities";

export interface CategoryField {
    fieldId: string;                // Field Unique ID
    name: string;                   // Field display title
    type: FieldTypes;                   // Field type
}

export interface Category {
    categoryId: string;             // Unique ID
    name: string;                   // Category display title
    categoryModelTitleId: string;   // Id of Title field
    fields: CategoryField[];
}