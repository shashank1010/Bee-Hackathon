import { ChangeEvent, FC, useCallback } from 'react';
import Form from 'react-bootstrap/Form';
import { CheckboxProps } from '../types';

export const Checkbox: FC<CheckboxProps> = (props) => {
    return (
        <Form.Group className="mb-3">
            <Form.Check 
                inline
                type="checkbox"
                label={props.label}
                checked={props.value}
                onChange={useCallback((e: ChangeEvent<HTMLInputElement>) => props.onChange(e.target.checked), []) }
            />
        </Form.Group>
    )
}