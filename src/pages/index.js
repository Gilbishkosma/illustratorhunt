import React from "react"
import Layout from '../components/Layout'
import styled from "@emotion/styled"
import { graphql } from "gatsby"
import Img from 'gatsby-image';
import SEO from "../components/seo"

const Description = styled.a`
    background: #fff;
    padding:10px;
    border: 0.1px solid #80808024;
    border-radius:5px;
    margin:10px;
    margin-top: 20px;
    max-width:350px;
    max-height:400px;
    width:100%;
    overflow:hidden;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    box-shadow:0.125rem 1rem 2rem rgb(32 41 49 / 5%);
    transition: all 0.2s ease-out;

    &:hover{
        box-shadow:0.125rem 1rem 2rem rgb(32 41 49 / 10%);
        transform: translateY(-10px) scale(1.05);
        ${'' /* cursor:pointer; */}
    }

`
const Banner = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
    flex-wrap:wrap;
    width: 100%;
    max-width:1500px;
    padding:10px;
    `

const BannerImg = styled(Img)`
    max-width:500px;
    width:100%;
    max-height:500;
    box-shadow:0.125rem 1rem 2rem rgb(32 41 49 / 10%);
    transition: all 0.2s ease-out;
    &:hover{
        box-shadow:0.125rem 1rem 2rem rgb(32 41 49 / 15%);
        transform: translateY(-10px) scale(1.05);
    }
`

const Content = styled.div`

`

const ImageCard = styled(Img)`
    position:relative;
    @media(max-width:450px){
        left:50%;
        right:50%;
        transform:translate(-50%);   
    }
`

const Tags = styled.div`
    display:flex;
    flex-wrap:wrap;
    margin-top:5px;
    font-size:0.7em;
`

const Tag = styled.p`
    color:black;
    padding-left:5px;
    margin-bottom:0px;
    opacity:0.7;
    font-family: Arial, sans-serif;
`

const Links = styled.div`
    display:flex;
    justify-content:space-around;
    width:170px;
    margin-top:50px;
    @media(max-width:450px){
        width:100%;
        margin-top:30px;
        justify-content:space-around;   
    }
`


const HideOnSmallScreen = styled.div`
    display:contents;
    @media(max-width:1105px){
        display:none;
    }
`

export default ({data: {allMdx:post,file:bannerimg}}) => {
    return <>
        <Layout width={1500}>
        <SEO title="Home" description="One Place to look for sites offering free illustrations." />
        <div style={{display:'flex',justifyContent:'center',marginTop:30}}>
        <Banner>
            <div>
            <h1 style={{marginTop:'50px',fontFamily:'Arial, sans-serif',fontSize:'3.2rem'}}>Illustration Hunt</h1>
            <p style={{maxWidth:460,marginTop:30}}>More than 30+ sites to look for free illustrations. New Illustration websites are added every day. In short one place to look for sites offering free illustrations.</p>
            <p></p>
            </div>
            <HideOnSmallScreen>
            <BannerImg alt="Hero image" fluid={bannerimg.childImageSharp.fluid} />
            </HideOnSmallScreen>
            
        </Banner>
        </div>

       <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap',marginTop:'100px'}}>
           {
              post.nodes.map((item,index) => {
                  return <Description href={item.frontmatter.siteUrl} key={index} target="_blank">
                            <Content>
                            <h4 style={{margin:5,fontFamily:'Arial, sans-serif',opacity:0.85}}>{item.frontmatter.title}</h4>
                               <Tags>
                                {
                                   item.frontmatter.tags.map((tag,index) => {
                                   return <Tag key={index}>{tag}</Tag>  
                                   }) 
                                }  
                                </Tags>                                                           
                            </Content>
                             <ImageCard fluid={item.frontmatter.show.childImageSharp.fluid} alt="" />
                         </Description>
                        
              }) 
           }
           </div>

        </Layout>
    </>
}



export const query = graphql`
    query{
        allMdx(sort: {fields: frontmatter___rating, order: ASC}){
            nodes {
              frontmatter {
                slug
                title
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
          file(sourceInstanceName: {eq: "images"}, name: {eq: "1"}) {
            childImageSharp {
                fluid{
           ...GatsbyImageSharpFluid_tracedSVG
            } 
          }}
    }
`



