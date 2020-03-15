import React from 'react';
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import {Link} from 'gatsby';

const NavLink = styled(Link)`
      color:#222;
      font-size:1rem;
      font-weight: ${props => props.fontWeight || 'normal'};
      line-height:1;
      margin:0 0.5rem 0 0;
      padding:0.25rem;
      text-decoration:none;
      background-image:none;
      
      &.current-page {
          border-bottom: 2px solid #222;
      }

      &:last-of-type{
          margin-right:0;
      }

      `;

const Header = () => (
    <header
    css={css`
        background:#fff;
        border-bottom:1px solid #ddd;
        display:flex;
        justify-content:space-between;
        flex-wrap:wrap;
        padding: 1.5rem calc((100vw - 1000px) / 2); /* for header both side equal margin,this will be of equal width of main */
    `}
    >
        <NavLink to="/" fontWeight="bold">Illustration Hunt</NavLink>
        <nav css={css`margin-top:0;display:flex;flex-wrap:wrap;`}>
            <NavLink to="/" activeClassName="current-page">Home</NavLink>
            <NavLink to="/about" activeClassName="current-page">About</NavLink>
        </nav>
    </header>
)

export default Header;


