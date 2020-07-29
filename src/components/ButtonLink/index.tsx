import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ButtonLink = styled(NavLink)`
    padding: 10px;
    font-size: 1rem;
    border-radius: 5px;
    border: 1px white solid;
    transition: opacity .1s ease-in;
    text-decoration: none;
    color: white;
    cursor: pointer;

    &:hover {
        opacity: .5;
    }
`

export default ButtonLink;