/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as React from "react"
import { graphql } from "gatsby"

import BlogList from "../templates/blog-list-template"
import Seo from "./pageComponent/seo"

const IndexPage = (props: any):JSX.Element => {
  return <BlogList {...props} />
}

export default IndexPage

export const Head = ():JSX.Element => <Seo title="Home" />

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }, limit: 6, skip: 0) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          featuredImage {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
`
