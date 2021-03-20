import React from 'react';

import { Link} from "react-router-dom";


import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import CardActionArea from '@material-ui/core/CardActionArea';



const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(1),
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  
  footer: {
    backgroundColor: '#DAE0E2',
    padding: theme.spacing(2),
    position: 'relative',
    bottom: 0,
    right: 0,
    left: 0
  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  buttons : {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  buttongg: {
    backgroundColor: 'teal'
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const cards = [];

export default function LangingPage() {


  const classes = useStyles();


  return (
    <div>
      <CssBaseline />
      <main style={{textAlign: 'start'}}>
        <div>
          <Container>
          <Paper className={classes.mainFeaturedPost} >
            {/* Increase the priority of the hero background image */}
            {<img style={{ display: 'none' }} src="https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="gg" />}
            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturedPostContent}>
                  <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                    Velocity Forms
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    Plan your next camping trip, manage event registrations, whip up a quick poll, create a pop quiz, and much more.
                  </Typography>
                  <div className={classes.buttons}>
                    <Link to="/register">
                    <Button variant="contained" color="primary" className={classes.buttongg}>
                      Signup Now
                    </Button>
                    </Link>
                    <Link to="/login">
                    <Button variant="contained" color="primary" className={classes.buttongg}>
                      Login
                    </Button>
                    </Link>
                  </div>
                 
              
                  
                </div>
              </Grid>
            </Grid>
          </Paper>
           <br></br>
           <br></br>
           <br></br>
           

           <div>
           <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
                <CardActionArea component="a" href="/">
                  <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                      <CardContent>
                        <Typography component="h2" variant="h5">
                        Survey with style
                        </Typography>
                        <Typography variant="subtitle1"  style={{color: 'teal'}}>
                          Style
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                        Use your own photo or logo, and Forms will pick just the right colors to complete your own unique form, or choose from a set of curated themes to set the tone. We can store images for future.
                        </Typography>
                       
                      </CardContent>
                    </div>
                    <Hidden xsDown>
                      <CardMedia className={classes.cardMedia} image="https://images.pexels.com/photos/4823233/pexels-photo-4823233.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" title="" />
                    </Hidden>
                  </Card>
                </CardActionArea>
              </Grid>
              <Grid item xs={12} md={6}>
                <CardActionArea component="a" href="/">
                  <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                      <CardContent>
                        <Typography component="h2" variant="h5">
                         
                          Organized & analyzed
                        </Typography>
                        <Typography variant="subtitle1"  style={{color: 'teal'}}>
                        organize
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                        Responses to your surveys are neatly and automatically collected in Forms, with real time response info and charts. Or, download a csv/json or load data in google sheets.                        </Typography>
                       
                      </CardContent>
                    </div>
                    <Hidden xsDown>
                      <CardMedia className={classes.cardMedia} image="https://images.pexels.com/photos/4823233/pexels-photo-4823233.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" title="" />
                    </Hidden>
                  </Card>
                </CardActionArea>
              </Grid>
            </Grid>
           </div>
          </Container>

          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </main>
      
      
      <footer className={classes.footer} style={{}}>
        <Typography variant="h6" align="center" gutterBottom>
          Forms
        </Typography>
      </footer>
    </div>
  );
}
