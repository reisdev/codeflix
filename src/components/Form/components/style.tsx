import styled from 'styled-components';

export const Input = styled.input`
    border: 1px solid var(--white);
    border-radius: 8px;
    background-color: transparent;
    font-size: 1rem;
    color: var(--white);
    padding: 10px;
    min-width: 400px;

    &[type="url"]{
        border: 1px solid var(--white);
        border-radius: 8px;
    }
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`

export const FieldStyle = styled.fieldset`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border: none;
`

export const SelectStyle = styled.select`
    border: 1px solid var(--white);
    border-radius: 8px;
    background-color: transparent;
    font-size: 1rem;
    color: var(--white);
    padding: 10px;
    min-width: 400px;

    option {
      background-color: var(--darkGrey);
      color: var(--white);
    }

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`

export const Label = styled.label`
    font-size: 1.2rem;
    font-weight:400;
    margin: 10px 10px 10px 0;
`
