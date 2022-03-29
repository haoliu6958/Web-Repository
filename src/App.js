import React from 'react';
import {useRoutes  } from 'react-router-dom';
import routes from './routes'
import Header from './components/Header'
import './App.css';



function App() {
  const element = useRoutes(routes)
  return (
    <div className="App">
      <Header/>
        {element}
     

    </div>
  );
}

export default App;
