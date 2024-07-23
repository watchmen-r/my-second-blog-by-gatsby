import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const FooterBar = (): JSX.Element  => {
  return (
    <Box
      component="footer"
      sx={{
        height: 13,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
        backgroundColor: '#759a97',
        color: 'white',
        bottom: 0,
        width: '100%',
        position: 'fixed'
      }}
    >
      <Typography variant="body1">
        © {new Date().getFullYear()} created by oda
      </Typography>
    </Box>
  );
};

export default FooterBar;
