
interface FieldProps extends Partial<HTMLElement> {
    name?: string;
}

export interface InputProps extends FieldProps {
    value: string;
    label: string;
    type: "text" | "email";
    onChange: (value: string) => any;
}

export interface SelectProps extends FieldProps {
    value: string;
    label: string;
    options: OptionInterface[];
    onChange: (value: string) => any;
}

export interface CheckboxProps extends FieldProps {
    label: string;
    value: boolean;
    onChange: (value: boolean) => any;
}

export interface NumberProps extends FieldProps {
    label: string;
    value: number;
    onChange: (value: number) => any;
}

export interface DropdownProps extends FieldProps {
    label: string;
    options: OptionInterface[];
    onChange: (value: string) => any;
}

export interface OptionInterface {
    label: string;
    value: string;
    disabled?: boolean;
}