
interface FieldProps extends Partial<HTMLElement> {
    name?: string;
    label?: string;
}

export interface InputProps extends FieldProps {
    value: string;
    type: "text" | "email" | "number" | "date";
    onChange: (value: string) => any;
}

export interface SelectProps extends FieldProps {
    value: string;
    options: OptionInterface[];
    onChange: (value: string) => any;
}

export interface CheckboxProps extends FieldProps {
    value: boolean;
    onChange: (value: boolean) => any;
}

export interface NumberProps extends FieldProps {
    value: number;
    onChange: (value: number) => any;
}

export interface DropdownProps extends FieldProps {
    value?: string;
    options: OptionInterface[];
    onChange: (value: string) => any;
}

export interface OptionInterface {
    label: string;
    value: string;
    disabled?: boolean;
}