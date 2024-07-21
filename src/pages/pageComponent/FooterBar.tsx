import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const FooterBar = (): JSX.Element  => {
  return (
    <Box
      component="footer"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
        backgroundColor: 'white',
        color: 'black',
        position: 'fixed',
        bottom: 0,
        width: '100%',
      }}
    >
      <Typography variant="body1">
        © {new Date().getFullYear()} createdby oda
      </Typography>
    </Box>
  );
};

export default FooterBar;
