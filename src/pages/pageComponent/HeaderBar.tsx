import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container, Grid, Link } from '@mui/material';
import { withPrefix } from 'gatsby';

const HeaderBar = (): JSX.Element => {
  return (
    <Box sx={{ flexGrow: 1, mt: 5 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#6988A9" }}>
        <Toolbar>
          <Container maxWidth="lg">
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item xs={8} sm={9} md={9}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    ml: { xs: 0, sm: 10 },
                  }}
                >
                  <Link href={withPrefix('/')} underline="none" sx={{ color: 'white' }}>Oda's blog</Link>
                </Typography>
              </Grid>
              <Grid item xs={4} sm={3} md={3} container justifyContent="flex-end">
                <Button color="inherit" sx={{ mr: {sm: 30}}}>
                  <Link href="/about" underline="none">
                    <Typography sx={{ color: 'white' }}>
                      About
                    </Typography>
                  </Link>
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default HeaderBar;
