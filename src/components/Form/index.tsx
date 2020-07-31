import React,{ FormEvent }from 'react';
import { FormStyle } from './style'

interface FormProps {
    onSubmit: (e: FormEvent) => void;
    children: any;
}

const Form: React.FC<FormProps> = ({ children, onSubmit, ...props }) => {
    return <FormStyle onSubmit={onSubmit}>
        {children}
    </FormStyle>
}

export default Form;
