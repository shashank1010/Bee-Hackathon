import { ChangeEvent, FC, useCallback } from 'react';
import Form from 'react-bootstrap/Form';
import { InputProps } from '../types';

export const Input: FC<InputProps> = (props) => {
    const { label, } = props;
    const { type, value, onChange, } = props;



    const inputProps = {
        type, value,
        onChange: useCallback((e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value), []) 
    };

    

    return (
        <Form.Group className="mb-3">
            <Form.Label>{label}</Form.Label>
            <Form.Control {...inputProps} />
        </Form.Group>
    )
}