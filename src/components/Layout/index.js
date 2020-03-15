import React from 'react';
import Header from './header'
import styled from "@emotion/styled"

const Page = styled.div`
  padding: 1.5rem calc((100vw - 1000px) / 2);
  margin:10px;
`

const Layout = ({children}) => {
    return <>
     <Header />
     <Page>
     {children}
     </Page>
    </>
}


export default Layout;