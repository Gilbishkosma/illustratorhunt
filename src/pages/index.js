import React from "react"
import Layout from '../components/Layout'
import styled from "@emotion/styled"
import { graphql } from "gatsby"
import Img from 'gatsby-image';

const Description = styled.div`
    width:100%;
    max-width:450px;
    height:280px;
    background-color:#fff;
    border:1px solid #e1e1e1;
    margin:50px 50px 100px 50px;
    &:hover{
        -webkit-box-shadow: 10px 10px 14px 0px rgba(196,190,196,1);
        -moz-box-shadow: 10px 10px 14px 0px rgba(196,190,196,1);
        box-shadow: 10px 10px 14px 0px rgba(196,190,196,1);
    }

    @media(max-width:450px){
        margin:50px 20px 100px 20px;
        height:330px;
        &:first-of-type{
            margin-top:100px;
        }
    }

`

const Content = styled.div`
    position:relative;
    bottom:400px;
    height:100%;
    left:12em;

    @media(max-width:450px){
     bottom:150px;
     display:flex;
     flex-direction:column;
     align-items:center;
     left:0px;   
    }
`

const ImageCard = styled(Img)`
    width:350px;
    height:350px;
    background-size:contain;
    background-repeat:no-repeat;
    background-position:center;
    position:relative;
    top:-50px;
    left:-120px;
    @media(max-width:450px){
        top:-100px;
        left:50%;
        right:50%;
        width:250px;
        height:200px;
        transform:translate(-50%);   
    }
`

const Tags = styled.div`
    display:flex;
    flex-wrap:wrap;
    width:180px;
    margin-top:30px;
    
    @media(max-width:450px){
        width:100%;
        justify-content:center;   
    }
`

const Tag = styled.p`
    margin:5px;
    padding:5px;
    border-radius:10px;
    border:1px solid #81dfe3;

    &:hover{
        border:1px solid #3481fb;
    }
`

const Links = styled.div`
    display:flex;
    justify-content:space-between;
    width:170px;
    margin-top:50px;

    @media(max-width:450px){
        width:100%;
        margin-top:30px;
        justify-content:space-around;   
    }
`

const Link = styled.a`
    color:#7995ea;
    background-color:#fff;
    background-image:none;
    &:hover{
        background-image:linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, #1ca086 1px, #1ca086 2px, rgba(0, 0, 0, 0) 2px);
    }
`

export default ({data: {allMdx:post}}) => {
    return <>
        <Layout width={1500}>
        <div style={{display:'flex',justifyContent:'space-evenly',flexWrap:'wrap'}}>
           {
              post.nodes.map((item,index) => {
                  console.log(item.frontmatter.show)
                  return <Description key={index}>
                            <ImageCard fluid={item.frontmatter.show.childImageSharp.fluid} alt="" />
                            <Content>
                            <h1 style={{marginTop:'70px'}}>{item.frontmatter.site}</h1>
                               <Tags>
                                {
                                   item.frontmatter.tags.map((tag,index) => {
                                   return <Tag key={index}>{tag}</Tag>  
                                   }) 
                                }  
                                </Tags>
                                <Links>
                                <Link href={item.frontmatter.siteUrl} target="_blank">Link</Link> 
                                <Link href={item.frontmatter.slug}>More...</Link> 
                                </Links>                            
                            </Content>
                         </Description>
              }) 
           }
           </div>
        </Layout>
    </>
}



export const query = graphql`
    query{
        allMdx {
            nodes {
              frontmatter {
                slug
                site
                siteUrl                
                tags
                show{
                    childImageSharp {
                        fluid{
                   ...GatsbyImageSharpFluid_tracedSVG
                    } 
                  } 
                }
              }
            }
          }
    }
`



