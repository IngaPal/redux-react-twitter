import React from 'react';
import Body from './components/Body';
import Navigation from './components/Navigation';

const App: React.FC = () => {
  return (
    <div className='app'>
      <Navigation />
      <Body />
    </div>
  );
};

export default App;