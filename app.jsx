import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import MultiStep from '/components/MultiStepForm/MultiStepForm.jsx';

import { UserProvider } from '/contexts/UserContext.jsx';

const App = () => {
  return (
    <div className="App">
      <UserProvider>
        <MultiStep />
      </UserProvider>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('react-app')
);

export default App;