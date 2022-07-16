export interface CategoryField {
    fieldId: string;                // Field Unique ID
    name: string;                   // Field display title
    type: string;                   // Field type
}

export interface Category {
    categoryId: string;             // Unique ID
    name: string;                   // Category display title
    categoryModelTitleId: string;   // Id of Title field
    fields: CategoryField[];
}