import React from "react"
import Layout from "../components/Layout"
import { MDXProvider } from "@mdx-js/react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "@emotion/styled"

const Tag = styled.p`
    margin:5px;
    padding:5px;
    border-radius:10px;
    border:1px solid #81dfe3;

    &:hover{
        border:1px solid #3481fb;
    }
`

const shortcodes = {Tag}

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        site
      }
      body
    }
  }
`

export default ({ data: { mdx: post } }) => {
  return (
    <Layout width={1300}>
      <MDXProvider components={shortcodes}>
          <MDXRenderer>{post.body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  )
}
