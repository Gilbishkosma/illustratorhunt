import React from 'react';
import Header from './header'
import styled from "@emotion/styled"

const Page = styled.div`
  margin:10px;
  padding: ${props => `0px 1.5rem calc((100vw - ${props.width}px) / 2)`} ;

  @media(max-width:450px){
       padding:0px;
  }
`

const Layout = ({children,width=1000}) => {
    return <>
     <Header />
     <Page width={width}>
     {children}
     </Page>
    </>
}


export default Layout;