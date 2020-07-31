import React from 'react'
import { Content } from './style'

const PageWrapper: React.FC = ({ children }) => (
  <Content>
    {children}
  </Content>
)

export default PageWrapper;
