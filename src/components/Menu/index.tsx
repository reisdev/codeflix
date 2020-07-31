import React from 'react';

import { MenuStyle, Logo, NewVideo } from "./style";
import { Link } from 'react-router-dom';

interface MenuProps {
    title?: string;
}

const Menu: React.FC<MenuProps> = () => {
    return <MenuStyle>
        <Link to="/">
            <Logo />
        </Link>
        <NewVideo to="/register/video">
            Novo vídeo
        </NewVideo>
    </MenuStyle>
}

export default Menu;