/* eslint-disable react/prop-types */
import * as React from 'react';
import { Link, graphql } from 'gatsby';

import { Box, Card, CardActionArea, CardContent, Container, Grid, Typography } from '@mui/material';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Bio from '../pages/pageComponent/bio';
import FooterBar from '../pages/pageComponent/FooterBar';
import HeaderBar from '../pages/pageComponent/HeaderBar';
import SubHeader from '../pages/pageComponent/SubHeader';
import Seo from '../pages/pageComponent/seo';

const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + '...';
};

const BlogList = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.nodes;
  const { currentPage, numPages } = pageContext;
  const currentPageConverted = !currentPage ? 1 : currentPage
  const isFirst = currentPageConverted === 1;
  const isLast = currentPageConverted === numPages;
  const prevPage = currentPageConverted - 1 === 1 ? '/' : `/page/${currentPageConverted - 1}`;
  const nextPage = `/page/${currentPageConverted + 1}`;

  return (
    <>
      <HeaderBar />
      <SubHeader />
      <Container maxWidth="lg" sx={{ pb: 10 }}>
        <Grid container spacing={3}>
          <Grid item md={8} mt={3}>
            <Grid container spacing={3}>
              {posts.map((post: any) => {
                const title = truncateText(post.frontmatter.title || post.fields.slug, 30);
                const description = truncateText(post.frontmatter.description || post.excerpt, 130);
                const image = getImage(post.frontmatter.featuredImage);
                return (
                  <Grid item xs={12} sm={6} key={post.fields.slug}>
                    <Card
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        transition: 'transform 0.3s, box-shadow 0.3s',
                        '&:hover': {
                          transform: 'translateY(-10px)', // Move the card 10px upwards
                          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                        },
                      }}
                    >
                      <CardActionArea component={Link} to={post.fields.slug}>
                        {image && (
                          <GatsbyImage image={image} alt={post.frontmatter.title} style={{ maxHeight: 200 }} />
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
                );
              })}
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
              {!isFirst ? (
                <Link to={prevPage} rel="prev">
                  ← Previous Page
                </Link>
              ) : <div></div>}
              {!isLast && (
                <Link to={nextPage} rel="next">
                  Next Page →
                </Link>
              )}
            </Box>
          </Grid>
          <Grid item md={4} mt={3}>
            <Box sx={{ position: 'sticky', top: '80px' }}>
              <Bio />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <FooterBar />
    </>
  );
};

export default BlogList;

export const Head = ({ pageContext }) => {
  const { currentPage } = pageContext;
  const title = currentPage === 1 ? 'All posts' : `Page ${currentPage}`;
  return <Seo title={title} />;
};

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }, skip: $skip, limit: $limit) {
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
`;
