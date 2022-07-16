import { ChangeEvent, FC, useCallback, useMemo } from "react";
import Form from 'react-bootstrap/Form';

import { OptionInterface, SelectProps } from "../types";

const Option: FC<OptionInterface> = ({ label, ...optionProps }) => {
    return <option { ...optionProps}>{ label }</option>
}

export const Select: FC<SelectProps> = (props) => {
    const { options, value, onChange } = props;

    const inputProps = {
        value,
        onChange: useCallback((e: ChangeEvent<HTMLSelectElement>) => onChange(e.target.value), []) ,
        children: useMemo(() => props.options.map((option) => <Option key={option.value} { ...option } />), [options])
    };

    
    return (
        <Form.Group className="mb-3">
            <Form.Label></Form.Label>
            <Form.Select { ...inputProps }>
                <option>Select a value</option>
                { inputProps.children }
            </Form.Select>
        </Form.Group>
    )
}