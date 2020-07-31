import React from 'react';

import { MenuStyle, NewVideo } from "./style";

interface MenuProps {
    title?: string;
}

const Menu: React.FC<MenuProps> = () => (
  <MenuStyle>
    <NewVideo to="/register/video">
      Novo vídeo
    </NewVideo>
  </MenuStyle>
)

export default Menu;
