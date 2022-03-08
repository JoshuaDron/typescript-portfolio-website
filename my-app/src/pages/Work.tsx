import React from 'react'
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core'
import PhotoCamera from '@material-ui/icons'

function Work() {
  return (
    <>
      <CssBaseline />
      <main>
        <div>
          <Container maxWidth = "sm">
            <Typography variant="h2" align="center" gutterBottom>
              My Work and experience
            </Typography>
          </Container>
        </div>
      </main>
    </>
  );
}

export default Work