import React, { FC } from "react";
import { FieldTypes } from "../../utilities";
import { Checkbox } from "./Checkbox";
import { Input } from "./Input";

const fields = {
    [FieldTypes.TEXT]: {Field: Input, props: {} },
    [FieldTypes.NUMBER]: {Field: Input, props: { type: "number" } },
    [FieldTypes.DATE]: {Field: Input, props: { type: "date" } },
    [FieldTypes.CHECKBOX]: {Field: Checkbox, props: {} },
}

interface VariadicFieldProps{
    onChange: (x: string) => void,
    type: FieldTypes;
    value: string;
    label: string;
}

export const VariadicField: FC<VariadicFieldProps> = (field) =>{
    const { type, value, onChange, label } = field

    const { Field, props = {} } = fields[type] || fields.text;
    
    // @ts-ignore
    return React.createElement(Field, {
        ...props, value,
        label,
         onChange
    })
}