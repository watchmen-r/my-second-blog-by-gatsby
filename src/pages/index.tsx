/* eslint-disable react/prop-types */
import * as React from "react"
import { Link, graphql } from "gatsby"

import { Box, Card, CardActionArea, CardContent, Container, Grid, Typography } from "@mui/material"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Bio from "./pageComponent/bio"
import FooterBar from "./pageComponent/FooterBar"
import HeaderBar from "./pageComponent/HeaderBar"
import Seo from "./pageComponent/seo"

const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) {
    return text
  }
  return text.substring(0, maxLength) + '...'
}

const BlogIndex = ({ data }): JSX.Element => {
  const posts = data?.allMarkdownRemark.nodes || []

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
      <Container maxWidth="lg" sx={{ pb: 10 }}>
        <Grid container spacing={3}>
          <Grid item md={8} mt={10}>
            <Grid container spacing={3}>
              {posts.map((post: any) => {
                const title = truncateText(post.frontmatter.title || post.fields.slug, 50)
                const description = truncateText(post.frontmatter.description || post.excerpt, 100)
                const image = getImage(post.frontmatter.featuredImage)
                return (
                  <Grid item xs={12} sm={6} key={post.fields.slug}>
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <CardActionArea component={Link} to={post.fields.slug}>
                        {image && (
                          <GatsbyImage
                            image={image}
                            alt={post.frontmatter.title}
                            style={{ maxHeight: 200 }}
                          />
                        )}
                        <CardContent>
                          <Typography variant="h6" component="h2">
                            {title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {post.frontmatter.date}
                          </Typography>
                          <Typography variant="body2" component="p">
                            {description}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                )
              })}
            </Grid>
          </Grid>
          <Grid item md={4} mt={10}>
            <Box sx={{ position: 'sticky', top: '80px' }}>
              <Bio />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <FooterBar />
    </>
  )
}

export default BlogIndex

export const Head = (): JSX.Element => <Seo title="All posts" />

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