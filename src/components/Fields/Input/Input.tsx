import { ChangeEvent, FC, useCallback } from 'react';
import { InputGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { InputProps } from '../types';

export const Input: FC<InputProps & { children?: any }> = (props) => {
    const { label, } = props;
    const { type, value, onChange, children } = props;



    const inputProps = {
        type, value,
        onChange: useCallback((e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value), [onChange]),
    };

    const renderChildren = () => {
        const field = <Form.Control {...inputProps} />;

        if (!children) return field;

        if (typeof children === "string") {
            return (
                <InputGroup>
                    {field}
                    <InputGroup.Text>{children}</InputGroup.Text>
                </InputGroup>
            )
        }


        
        return (
            <InputGroup>
                {field}
                {children as any}
            </InputGroup>
        )
        
    }
    

    return (
        <Form.Group className="mb-3">
            <Form.Label>{label}</Form.Label>
            { renderChildren() }
        </Form.Group>
    )
}