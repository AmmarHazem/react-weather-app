import React from 'react';

import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'

const api_key = 'aa980ee6cb73eac7e7a1f9d0f22e71c7'

function App() {
  return (
    <div className="App">
      <Titles />
      <Form />
      <Weather />
    </div>
  );
}

export default App;
