import styled from 'styled-components';

export const FooterStyle = styled.footer`
    padding: 20px;
    text-align: center;
    font-size: 1.2rem;
    background-color: var(--darkGrey);

    &::before {
        content: "";
        display: block;
        position: relative;
        bottom: 20px;
        left: -20px;
        width: calc(100% + 35px);
        border: 2px solid var(--purple);      
    }
`;

export const ExternalLink = styled.a.attrs({
    target: "_blank",
    rel: "noopener noreferrer"
})`
    text-decoration: none;
    color: var(--purple);
`