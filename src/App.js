import React from 'react';
import './App.css';
import ApplicationRoutes from './components/ApplicationRoutes/ApplicationRoutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div className="App">
      <Header />
      <ApplicationRoutes />
      <ToastContainer toastClassName="toastContainer" progressClassName="toastProgress"
  bodyClassName="toastBody" />
    </div>
  );
}

export default App;
