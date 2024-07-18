import * as React from "react"
import { Link, PageProps, graphql } from "gatsby"

import Bio from "../components/bio"
import Seo from "../components/seo"

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

const BlogPostTemplate: React.FC<PageProps<BlogPostTemplateQueryResult>> = ({ data: { previous, next, markdownRemark: post }, location }) => {
  return (
    <>
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html as string }}
          itemProp="articleBody"
        />
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`${location.href}${next.fields.slug}`} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </>
  )
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
    $id: String!
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
