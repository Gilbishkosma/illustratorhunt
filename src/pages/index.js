import React from "react"
import Layout from '../components/Layout'
import styled from "@emotion/styled"
import { graphql } from "gatsby"


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

const ImageCard = styled.div`
    width:450px;
    height:350px;
    background-image: url('https://www.metalclock.in/static/media/award.fceada8e.svg');
    background-size:contain;
    background-repeat:no-repeat;
    background-position:center;
    position:relative;
    top:-60px;
    left:-150px;
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
    width:150px;
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
    margin-top:30px;

    @media(max-width:450px){
        width:100%;
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
        <Layout width={1300}>
        <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap'}}>
           {
              post.nodes.map((item,index) => {
                  return <Description>
                            <ImageCard />
                            <Content>
                                <h1 style={{marginTop:'70px'}}>Icons8</h1>
                               <Tags>
                                <Tag>Free</Tag>
                                <Tag>Paid</Tag>
                                <Tag>OpenSource</Tag>
                                </Tags>
                                <Links>
                                <Link href="#">Link</Link>
                                <Link href="#">More..</Link>
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
                title
                slug
              }
            }
          }
    }
`



