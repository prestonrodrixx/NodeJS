import React from 'react';
import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';

import useStyles from './styles';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const App = () => {
    const classes = useStyles();
    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera className={classes.icon} />
                    <Typography variant="h6">
                        Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>

            <main>
                <div className={classes.container}>
                    <Container maxWidth="sm">
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Hello and welcome to my photo album. This is practice react application using material ui.
                        </Typography>
                        <div className={classes.button}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">View Photos</Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">Downloads</Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {cards.map(() => (
                            <Grid item>
                                <Card className={classes.card}>
                                    <CardMedia className={classes.cardMedia} image="https://source.unsplash.com/random" title="Image Title" />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5">Heading</Typography>
                                        <Typography variant="p">Here you will find the card content.</Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" variant="contained" color="primary">View</Button>
                                        <Button size="small" variant="contained" color="secondary">Edit</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
        </>
    );
}

export default App;