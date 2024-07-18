import * as React from 'react';
import { Link } from "gatsby"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

const HeaderBar = (): JSX.Element => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#6988A9" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              display: { xs: "none", sm: "block" },
              fontWeight: 700,
            }}
          >
            Oda's blog
          </Typography>
          <Button color="inherit"><Link to="/about">About</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default HeaderBar;
