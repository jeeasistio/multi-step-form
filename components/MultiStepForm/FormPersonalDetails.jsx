import React, { useContext } from 'react';
import {
  makeStyles,
  TextField,
  Typography,
  Paper,
  Button
} from '@material-ui';

import { UserContext } from '/contexts/UserContext.jsx';

const FormPersonalDetails = () => {
  
  const { userState, nextStep, prevStep, fieldChange } = useContext(UserContext);
  
  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: 300,
      padding: 15,
      margin: '20px auto'
    },
    buttonCtn: {
      display: 'flex',
      justifyContent: 'space-evenly',
      marginTop: 15
    },
    buttonStyle: {
      width: '45%'
    }
  }))
  
  const classes = useStyles()
  
  return (
    <Paper className={classes.root} elevation="3" id="form-personal-details" component="section">
      <Typography align="center" color="primary" component="h2" variant="h4">Form Personal Details</Typography>
      <form onSubmit={nextStep}>
        <TextField onChange={(e) => fieldChange(e)} name="occupation" label="Occupation" margin="normal" fullWidth value={userState.occupation} />
        <TextField onChange={(e) => fieldChange(e)} name="address" label="Address" margin="normal" fullWidth value={userState.address} />
        <TextField onChange={(e) => fieldChange(e)} name="bio" label="Bio" margin="normal" fullWidth value={userState.bio} />
        <div className={classes.buttonCtn}>
          <Button onClick={prevStep} className={classes.buttonStyle} color="secondary" variant="contained">BACK</Button>
          <Button className={classes.buttonStyle} type="submit" color="primary" variant="contained">CONTINUE</Button>
        </div>
      </form>
    </Paper>
  )
}

export default FormPersonalDetails;