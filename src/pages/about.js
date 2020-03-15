import React from 'react';
import Layout from '../components/Layout'
import styled from "@emotion/styled"
import { graphql } from "gatsby"
import Img from 'gatsby-image';


const Section = styled.div`    
   @media(max-width:1100px){
        order:2
    };
`

const LinkBlock = styled.div`
    display:flex;
    align-items: start;
    `

export default ({data : {file: image}}) => {
    return <>
            <Layout style={{display:'flex',flexDirection:'row'}}>
                    <Section>
                    <div>
                     <h1 style={{marginTop:"0px"}}>Lorem Lipsum XYZ</h1>
                     <p>asd ads asd asdasd asdasd asdasd asdasdsad</p>
                    </div>
                    <div>
                        <LinkBlock>
                        <img src="https://img.icons8.com/nolan/50/github.png" alt=""/>
                        <a href="https://github.com/Gilbishkosma" style={{marginLeft:"10px",marginTop:"10px"}}>Github</a>
                        </LinkBlock>
                        <LinkBlock>
                        <img src="https://img.icons8.com/color/48/000000/web.png" alt=""/>
                        <a href="https://gil20.me" style={{marginLeft:"10px",marginTop:"10px"}}>Personal Site</a>
                        </LinkBlock>
                        <LinkBlock>
                        <img src="https://img.icons8.com/color/48/000000/stackoverflow.png" alt=""/>
                        <a href="https://stackoverflow.com/users/10052666/gilbeesh-kosma" style={{marginLeft:"10px",marginTop:"10px"}}>StackOverflow</a>
                        </LinkBlock>
                    </div>
                    </Section>
                    <Img fluid={image.childImageSharp.fluid} alt="" style={{width:'700px',order:1}}  />
            </Layout>
           </>
}


export const pageQuery = graphql`
  query {
    file(relativePath: {eq: "about_me.png"}) {
    childImageSharp {
           fluid{
      ...GatsbyImageSharpFluid_tracedSVG
       } 
     } 
    }
  }
`