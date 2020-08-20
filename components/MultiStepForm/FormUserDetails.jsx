import React, { useContext } from 'react';
import {
  makeStyles,
  TextField,
  Typography,
  Paper,
  Button
} from '@material-ui';

import { UserContext } from '/contexts/UserContext.jsx';

const FormUserDetails = () => {

  const { userState, nextStep, fieldChange } = useContext(UserContext);
  
  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: 300,
      padding: 15,
      margin: '20px auto'
    },
    nextStyle: {
      marginTop: 15
    }
  }))
  
  const classes = useStyles()

  return (
    <Paper className={classes.root} elevation="3" id="form-user-details" component="section">
      <Typography align="center" color="primary" component="h2" variant="h4">Form User Details</Typography>
      <form onSubmit={nextStep}>
        <TextField onChange={(e) => fieldChange(e)} name="firstName" label="First Name" margin="normal" fullWidth required value={userState.firstName} />
        <TextField onChange={(e) => fieldChange(e)} name="lastName" label="Last Name" margin="normal" fullWidth required value={userState.lastName} />
        <TextField onChange={(e) => fieldChange(e)} name="email" type="email" label="Email" margin="normal" fullWidth required value={userState.email} />
        <Button className={classes.nextStyle} type="submit" color="primary" variant="contained" fullWidth>CONTINUE</Button>
      </form>
    </Paper>
  )
}

export default FormUserDetails;