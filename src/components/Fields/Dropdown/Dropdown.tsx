import { FC, useCallback, useMemo } from 'react';

import DropdownButton from 'react-bootstrap/DropdownButton';
import DropdownComponent from 'react-bootstrap/Dropdown';

import { DropdownProps, OptionInterface } from '../types';
import { find } from 'lodash';

const DropdownItem: FC<OptionInterface & Record<"onChange", Function>> = ({ value, label, disabled, onChange }) => {
  const onClick = useCallback(() => onChange(value), [value]);
  return <DropdownComponent.Item onClick={onClick} disabled={disabled}>{label}</DropdownComponent.Item>
}


export const Dropdown: FC<DropdownProps> = ({ label, value, options, onChange }) => {
    const title = useMemo(() => find(options, { value })?.label ?? label, [value, label, options]),
          dropdownOptions = useMemo(() => options.map((option) => <DropdownItem key={option.value} onChange={onChange} { ...option } />, ), [ options ]);

    return (
        <DropdownButton title={ title }>
          {dropdownOptions}
        </DropdownButton>
      );
}
