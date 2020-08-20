import React from 'react';
import {
  makeStyles,
  Typography,
  Paper
} from '@material-ui';

const Success = () => {
  
  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      height: 300,
      width: 300,
      margin: '15px auto',
      textAlign: 'center'
    }
  }))
  
  const classes = useStyles();
  
  return (
    <Paper className={classes.root} elevation="3" component="section">
      <Typography color="primary" variant="h5">Thank you for submitting the form!</Typography>
      <Typography color="primary">Your form is now on process.</Typography>
    </Paper>
  )
}

export default Success;