import React from 'react';
import styled from "@emotion/styled"
import {css} from "@emotion/react"
import {Link} from 'gatsby';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from "gatsby"

const NavLink = styled(Link)`
      color:#222;
      font-size:1rem;
      font-weight: ${props => props.fontWeight || 'normal'};
      line-height:1;
      margin:0 0.5rem 0 0;
      padding:0.25rem;
      text-decoration:none;
      background-image:none;
      transition: all 0.2s ease-out;
      margin-left:10px;
      
      &.current-page {
          border-bottom: 2px solid #222;
      }


      &:hover{
        border-bottom: 2px solid #222;
      }
    
    `;

const AnchorTag = styled.a`
      color:black;
      font-size:1rem;
      line-height:1;
      margin:0 0.5rem 0 0;
      text-shadow: 0 0 white;
      text-decoration:none;
      background-image:none;
      margin-right:0;
      margin-left:10px;
      border: 0.5px solid #9e98984f;
      background-color: #ffebca;
      padding:10px;
      border-radius:5px;
      transition: all 0.2s ease-out;
      box-shadow:0.125rem 1rem 2rem rgb(32 41 49 / 2%);

      &:hover{
       box-shadow:0.125rem 1rem 2rem rgb(32 41 49 / 10%);
       transform: translateY(-5px) scale(1);
      }
`

const Header = () => {
  const data = useStaticQuery(graphql`
    query{
       file(sourceInstanceName: {eq: "images"}, name: {eq: "icon"}) {
            childImageSharp {
                fluid{
           ...GatsbyImageSharpFluid_tracedSVG
            } 
        }
    }
  }
  `)
  return <header
    css={css`
        background:#fff;
        border-bottom:1px solid #ddd;
        display:flex;
        justify-content:space-between;
        flex-wrap:wrap;
        padding: 0.5rem calc((100vw - 1500px) / 2); /* for header both side equal margin,this will be of equal width of main */
    `}
    >    
        <div style={{display:"flex"}}>
        <iframe style="border: none,padding:0px" width="70" height="70" src="https://rive.app/s/aV0n684_IEaxGq3UnujNtA/embed" allowfullscreen allow="autoplay"></iframe>
        <NavLink to="/" style={{alignSelf:'center',padding:'0px'}}>IllustrationHunt</NavLink>
        </div>
        <nav css={css`margin-top:0;display:flex;flex-wrap:wrap;align-items:center`}>
            <NavLink to="/" activeClassName="current-page">Home</NavLink>
            <NavLink to="/about" activeClassName="current-page">About</NavLink>
        </nav>
    </header>
}

export default Header;


