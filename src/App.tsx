import React from 'react';
import { Agify } from './components';

function App(this: any) {
  return (
      <div className="App">
        <header className="App-header">
          <Agify changeInput={ (newInput: string) :any => {} }  input={ '' }/>
        </header>
      </div>
  );
}

export default App;
