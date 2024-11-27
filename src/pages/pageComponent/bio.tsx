import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Link as MuiLink, IconButton, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

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
            linkedin
            github
          }
        }
      }
    }
  `)

  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link href="https://portfolio-town-tau.vercel.app/" underline="none" target="_blank">
        <CardActionArea
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 3,
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
          <Typography gutterBottom variant="h5" component="div" mt="10px" color={"black"}>
            {author.name}
          </Typography>
        </CardActionArea>
      </Link>
      <CardContent>
        <Typography variant="body2" color="text.secondary" mt="-20px">
          {author?.summary || null}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          {social?.linkedin && (
            <IconButton component={MuiLink} href={social.linkedin} target="_blank" aria-label="LinkedIn" sx={{ color: 'inherit' }}>
              <LinkedInIcon />
            </IconButton>
          )}
          {social?.github && (
            <IconButton component={MuiLink} href={social.github} target="_blank" aria-label="GitHub" sx={{ color: 'inherit' }}>
              <GitHubIcon />
            </IconButton>
          )}
        </Box>
      </CardContent>
    </Card>
  )
}

export default Bio
