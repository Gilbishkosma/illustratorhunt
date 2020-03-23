import React from 'react';
import Layout from '../components/Layout'
import styled from "@emotion/styled"
import { graphql } from "gatsby"
import Img from 'gatsby-image';


const Section = styled.div`    
   @media(max-width:1210px){
        order:2
    };
`

const LinkBlock = styled.div`
    display:flex;
    align-items: start;
    `

export default ({data : {file: image}}) => {
    return <>
            <Layout width={1500}>
                  <div style={{display:'flex',paddingTop:"0px",justifyContent:'end',alignItems:'center',flexWrap:'wrap'}}>
                    <Section>
                    <div>
                     <h1 style={{marginTop:"0px"}}>Hii, i am Gilbish Kosma</h1>
                     <p>I developed <b>IllustrationHunt</b> inorder to list<br/> some of my favorite illustration sites.<br/>Hope you will like it.</p>
                     <p>Email me at <a href="mailto:gilbish@gil20.me" style={{color:"#0c9abb"}}>gilbeeshkosma15@gmail.com</a></p>
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
                    <Img fluid={image.childImageSharp.fluid} alt="" style={{width:'800px',order:1}}  />
                    </div>
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