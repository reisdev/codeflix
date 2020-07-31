import React, { useMemo } from 'react';
import { Label, FieldStyle, Input } from './style';

interface FieldProps {
    label: string;
    type: string;
    name: string;
    value: any;
    inline?: boolean;
    onChange: (value: any) => void;
}

const Field: React.FC<FieldProps> = ({ label, type, name,
    value, onChange, inline }) => {

    const { id, tag }: { id: string, tag: any } = useMemo(() => {
        return {
            id: `id_${name}`,
            tag: type === "textarea" ? "textarea" : "input"
        };
    }, [name, type]);

    return <FieldStyle>
        <Label htmlFor={id}>
            {label}
        </Label>
        <Input
            id={id}
            as={tag}
            name={name}
            type={type}
            value={value}
            onChange={(e: any) => onChange(e.target.value)}
        />
    </FieldStyle>
}

export default Field;