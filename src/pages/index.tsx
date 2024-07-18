import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Seo from "../components/seo"
import HeaderBar from "./pageComponent/HeaderBar"
import { Box, Container, Grid } from "@mui/material"

const BlogIndex = ({ data }): JSX.Element => {
  // eslint-disable-next-line react/prop-types
  const posts = data?.allMarkdownRemark.nodes as Array<any> || [];
  console.log(data)
  if (posts.length === 0) {
    return (
      <>
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </>
    )
  }

  return (
    <>
      <HeaderBar />
      <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item md={8} mt={10}>
              <ol style={{ listStyle: `none` }}>
                {posts.map((post: any) => {
                  const title = post.frontmatter.title || post.fields.slug
                  return (
                    <li key={post.fields.slug}>
                      <article
                        className="post-list-item"
                        itemScope
                        itemType="http://schema.org/Article"
                      >
                        <header>
                          <h2>
                            <Link to={post.fields.slug} itemProp="url">
                              <span itemProp="headline">{title}</span>
                            </Link>
                          </h2>
                          <small>{post.frontmatter.date}</small>
                        </header>
                        <section>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: post.frontmatter.description || post.excerpt,
                            }}
                            itemProp="description"
                          />
                        </section>
                      </article>
                    </li>
                  )
                })}
              </ol>
            </Grid>
            <Grid item md={4} mt={10}>
              <Bio />
            </Grid>
          </Grid>
          <footer>
            {new Date().getFullYear()}, createdby oda
          </footer>

      </Container>
    </>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = ():JSX.Element => <Seo title="All posts" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
