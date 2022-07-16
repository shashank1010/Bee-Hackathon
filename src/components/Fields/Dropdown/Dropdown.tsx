import { FC, useCallback, useMemo } from 'react';
import { default as DropdownCompoent } from 'react-bootstrap/Dropdown';
import { DropdownProps, OptionInterface } from '../types';

const DropdownItem: FC<OptionInterface & Record<"onChange", Function>> = ({ value, label, disabled, onChange }) => {
  const onClick = useCallback(() => onChange(value), [value]);
  return <DropdownCompoent.Item onClick={onClick} disabled={disabled}>{label}</DropdownCompoent.Item>
}

export const Dropdown: FC<DropdownProps> = ({ label, options, onChange }) => {
    const dropdownOptions = useMemo(() => options.map((option) => <DropdownItem key={option.value} onChange={onChange} { ...option } />, ), [ options ]);
  
    return (
        <DropdownCompoent>
          <DropdownCompoent.Toggle>{ label }</DropdownCompoent.Toggle>
          <DropdownCompoent.Menu>
            {dropdownOptions}
          </DropdownCompoent.Menu>
        </DropdownCompoent>
      );
}
