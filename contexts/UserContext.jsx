import React, { useState, createContext } from 'react';
import App from '/app.jsx';

const UserContext = createContext();

const UserProvider = ({ children }) => {

  const [userState, setUserState] = useState({
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    address: '',
    bio: ''
  })

  const nextStep = () => {
    const { step } = userState;
    setUserState({
      ...userState,
      step: step + 1
    })
  }

  const prevStep = () => {
    const { step } = userState;
    setUserState({
      ...userState,
      step: step - 1
    })
  }

  const fieldChange = (e) => {
    setUserState({
      ...userState,
      [e.target.name]: e.target.value
    });
    e.target.value = userState[e.target.name]
  }

  return (
    <UserContext.Provider value={{
      userState,
      nextStep,
      prevStep,
      fieldChange
    }}>
      { children }
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }