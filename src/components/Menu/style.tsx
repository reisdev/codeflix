import styled from "styled-components";
import ButtonLink from "../ButtonLink";

export const MenuStyle = styled.nav`
    width: 100%;
    color: white;
    display: flex;
    height: fit-content;
    padding: 10px 20px;
    align-items: center;
    background-color: #181818;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 3;

    @media screen and (max-width: 768px) {
        justify-content: center;
    }

    &::after {
        display: block;
        position: absolute;
        bottom: -4px;
        left: 0;
        content: "";
        width: 100%;
        border: 2px solid #673B8E;      
    }
`

export const Logo = styled.img.attrs({
    src: process.env.REACT_APP_LOGO_URL,
    alt: "Codeflix logo, netflix style"
})`
    height: 55px;
    width: auto;
`

export const NewVideo = styled(ButtonLink)`
    font-size: 1.5rem;
    padding: 16px;
    @media screen and (max-width: 768px) {
        display:none;
    }
    
`
