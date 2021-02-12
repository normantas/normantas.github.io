import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import 'typeface-roboto';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug,
              title
            }
          }
        }
      }
    }  
  `)

  const pages = data.allMarkdownRemark.edges.map(edge => edge.node.frontmatter)

  return (
    <Layout>
      <SEO title="Blog" />
      
      <p>
        Blog :)
        {pages.map(
          page => <ul>
            <li><a href={page.slug}>{page.title}</a></li>
          </ul>
        )}
      </p>
    </Layout>
  );
}

export default IndexPage