import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Bio = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
//   const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 2,
        }}
      >
        <StaticImage
          className="bio-avatar"
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../../images/profile-pic.png"
          width={50}
          height={50}
          quality={95}
          alt="Profile picture"
        />
        <Typography gutterBottom variant="h5" component="div" mt="10px">
          {author.name}
        </Typography>
      </CardActionArea>
      <CardContent>
        <Typography variant="body2" color="text.secondary" mt="-20px">
          {author?.summary || null}
        </Typography>
      </CardContent>
    </Card>
    </div>
  )
}

export default Bio
