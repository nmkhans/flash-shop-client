import React from 'react';
import './App.css';
import ApplicationRoutes from './components/ApplicationRoutes/ApplicationRoutes';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div className="App">
      <Header />
      <ApplicationRoutes />
    </div>
  );
}

export default App;
