import * as React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"

const NotFoundPage = (): JSX.Element => {

  return (
    <>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn't exist... the sadness.</p>
    </>
  )
}

export const Head = (): JSX.Element => <Seo title="404: Not Found" />

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
