import React, { useContext } from 'react';
import Confirm from './Confirm.jsx';
import FormPersonalDetails from './FormPersonalDetails.jsx';
import FormUserDetails from './FormUserDetails.jsx';
import Success from './Success.jsx';

import { UserContext } from '/contexts/UserContext.jsx';

const MultiStepForm = () => {
  
  const { userState } = useContext(UserContext);
  
  const { step } = userState;
  
  switch (step) {
    case 1:
      return (<FormUserDetails />)
      break;
    case 2:
      return (<FormPersonalDetails />)
      break;
    case 3:
      return (<Confirm />)
      break;
    case 4:
      return (<Success />)
      break;
    default:
      return (<FormUserDetails />)
  }
}

export default MultiStepForm;