import React from 'react';

import { MenuStyle, Logo, NewVideo } from "./style";

interface MenuProps {
    title?: string;
}

const Menu: React.FC<MenuProps> = () => {
    return <MenuStyle>
        <Logo />
        <NewVideo to="/new-video">
            Novo vídeo
        </NewVideo>
    </MenuStyle>
}

export default Menu;