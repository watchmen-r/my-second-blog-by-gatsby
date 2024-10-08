import * as React from "react"
import { Link, PageProps, graphql } from "gatsby"

import "./pageComponent/prism.css";
import { Box, Button, Card, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import parse, { domToReact } from "html-react-parser";
import HeaderBar from "./pageComponent/HeaderBar";
import FooterBar from "./pageComponent/FooterBar";
import Seo from "./pageComponent/seo";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface Frontmatter {
  title: string
  date: string
  description?: string
}

interface Fields {
  slug: string
}

interface MarkdownRemark {
  html?: string
  frontmatter: Frontmatter
  excerpt?: string
}

interface BlogPostTemplateQueryResult {
  previous?: {
    frontmatter: Frontmatter
    fields: Fields
  }
  next?: {
    frontmatter: Frontmatter
    fields: Fields
  }
  site: {
    siteMetadata: {
      title: string
    }
  }
  markdownRemark: MarkdownRemark
}

const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + '...';
};

const BlogPostTemplate: React.FC<PageProps<BlogPostTemplateQueryResult>> = ({ data: { previous, next, markdownRemark: post }, location }) => {
  const isSmallScreen = useMediaQuery((theme: any) => theme.breakpoints.down('sm'));
  const headings: any = []
  const options = {
    replace: (domNode: any) => {
      if (domNode.name === 'h1') {
        const { children, attribs } = domNode
        const id = attribs.id || `heading-${headings.length + 1}`
        headings.push({
          text: domToReact(children),
          id,
        })
        domNode.attribs.id = id
        domNode.attribs.class = `${domNode.attribs.class || ''} anchor-heading`.trim();
        return domNode
      }
    }
  }
  const parsedHtml = parse(post.html as string, options)

  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <>
      <HeaderBar />
      <Container maxWidth="lg" sx={{ pb: 8 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8} mt={7}>
            <Card sx={{padding: 3}}>
              <header>
                <Typography variant="h3" component="h1" gutterBottom>
                  {post.frontmatter.title}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {post.frontmatter.date}
                </Typography>
              </header>
              <Box
                component="section"
                itemProp="articleBody"
                sx={{ mt: 3 }}
              >
                {parsedHtml}
              </Box>
              <nav className="blog-post-nav">
                <Box
                  component="ul"
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    listStyle: 'none',
                    padding: 0,
                    mt: 5,
                  }}
                >
                  <Box component="li">
                    {previous && (
                      <Button 
                        component={Link} 
                        to={previous.fields.slug} 
                        rel="prev" 
                        startIcon={<ArrowBackIcon />}
                        sx={{
                          padding: '8px 16px',
                          border: '1px solid',
                          borderRadius: '8px',
                          textTransform: 'none',
                          '&:hover': {
                            backgroundColor: '#f5f5f5',
                          },
                        }}
                      >
                        {isSmallScreen ? 'prev page' : truncateText(previous.frontmatter.title, 25)}
                      </Button>
                    )}
                  </Box>
                  <Box component="li">
                    {next && (
                      <Button 
                        component={Link} 
                        to={next.fields.slug} 
                        rel="next" 
                        endIcon={<ArrowForwardIcon />}
                        sx={{
                          padding: '8px 16px',
                          border: '1px solid',
                          borderRadius: '8px',
                          textTransform: 'none',
                          '&:hover': {
                            backgroundColor: '#f5f5f5',
                          },
                        }}
                      >
                        {isSmallScreen ? 'next page' : truncateText(next.frontmatter.title, 25)}
                      </Button>
                    )}
                  </Box>
                </Box>
              </nav>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} mt={7} sx={{ display: { xs: 'none', md: 'block' }}}>
            <Card sx={{ position: 'sticky', top: '80px',}}>
              <Box>
                <Box sx={{backgroundColor: '#6988A9', color: 'white', padding: '3px',}}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ textAlign: 'center', mt: '5px' }}
                  >
                    Table of Contents
                  </Typography>
                </Box>
                <Box component="ul" sx={{ listStyle: 'none', padding: 0 }}>
                  {headings.map((heading: any, index: number) => (
                    <Box component="li" key={index} sx={{ mb: 1 }}>
                      <Button
                        size="small"
                        variant="outlined"
                        onClick={() => handleScroll(heading.id)}
                        sx={{ marginLeft: 1, textTransform: 'none' }}
                      >
                        {`${index + 1}. `}{ truncateText(heading.text, 45) }
                      </Button>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <FooterBar />
    </>
  );
}

interface HeadQueryResult {
  markdownRemark: MarkdownRemark
}

export const Head: React.FC<PageProps<HeadQueryResult>> = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
query BlogPostBySlug(
    $id: String
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
