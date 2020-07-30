import styled from 'styled-components';

export const FooterStyle = styled.footer`
    text-align: center;
    padding: 20px;
    background-color: var(--darkGrey);
    font-size: 1.2rem;

    &::before {
        display: block;
        position: relative;
        bottom: 20px;
        left: -20px;
        content: "";
        width: calc(100vw - 24px);
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