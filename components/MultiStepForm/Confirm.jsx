import React, { useContext } from 'react';
import {
  makeStyles,
  Typography,
  Paper,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider
} from '@material-ui';

import { UserContext } from '/contexts/UserContext.jsx';

const Confirm = () => {

  const { userState, nextStep, prevStep } = useContext(UserContext);
  
  const keys = Object.keys(userState);

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
    },
    confirmTitle: {
      textTransform: 'uppercase'
    }
  }))

  const classes = useStyles()

  return (
    <Paper className={classes.root} elevation="3" id="form-personal-details" component="section">
      <Typography align="center" color="primary" component="h2" variant="h4">Confirm Details</Typography>
      <form onSubmit={nextStep}>
        <List>
          {keys.map((key) => {
            return (
              <ListItem>
                <ListItemText>
                  <Typography className={classes.confirmTitle} color="textSecondary" variant="body2">{`${key}`}</Typography>
                  <Divider />
                  <Typography>{`${userState[key]}`}</Typography>
                </ListItemText>
              </ListItem>
            )
          })}
        </List>
        <div className={classes.buttonCtn}>
          <Button className={classes.buttonStyle} fullWidth onClick={prevStep} color="secondary" variant="contained">BACK</Button>
          <Button className={classes.buttonStyle} fullWidth type="submit" color="primary" variant="contained">CONFIRM</Button>
        </div>
      </form>
    </Paper>
  )
}

export default Confirm;