import React from 'react';

import { Label } from 'src/visual/styles/Label';
import { FieldStyle } from 'src/visual/styles/FieldStyle';
import { SelectStyle } from './styles';

interface SelectProps {
  name: string;
  label: string;
  value: any;
  onSelect: (value: any) => void;
  options: Array<{
    value: any,
    label: string | number
  }>
}

const Select: React.FC<SelectProps> = ({ options, label, name, value, onSelect }) => {
    return (
      <FieldStyle>
        <Label>{label}</Label>
        <SelectStyle
          name={name}
          value={value}
          onChange={(e) => onSelect(e.target.value)}
        >
          {options.map((opt, index) => (
            <option
              key={`${name}-option-${index}`}
              value={opt.value}
            >
              {opt.value}
            </option>
          ))}
        </SelectStyle>
      </FieldStyle>
    )
}

export default Select
