import { useTheme, useMediaQuery, Box, Typography } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const SubHeader = (): JSX.Element => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box
      sx={{
        position: 'relative',
        textAlign: 'center',
        color: 'white',
      }}
    >
      <StaticImage src="../../images/sub-header.jpg" alt="Subheader" style={{ width: '100%', height: '250px' }} />
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'rgba(0, 0, 0, 0)',
          p: 2,
          borderRadius: 1
        }}
      >
        <Typography
          variant={isSmallScreen ? 'h5' : 'h4'}
          component="h1"
        >
          <Typewriter
            words={['Welcome to my tech blog', 'Enjoy Reading']}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </Typography>
      </Box>
    </Box>
  );
}

export default SubHeader;
