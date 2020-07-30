import React from 'react'
import { Content } from './style'

const Page: React.FC = ({ children }) => {
    return <Content>
        {children}
    </Content>
}

export default Page;