import React from 'react';
import { FooterStyle, ExternalLink } from './style';

const Footer: React.FC = () => {
    return <FooterStyle>
        <ExternalLink href="https://github.com/reisdev">
            ReisDev
        </ExternalLink> © 2020. Desenvolvido com ❤
        durante a <ExternalLink href="https://www.alura.com.br/imersao-react">
            #ImersãoReact
        </ExternalLink>
    </FooterStyle>
}

export default Footer;