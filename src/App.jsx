import { useState } from 'react';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Dashboard from './pages/dashboard';

function App() {

  return (
    <>
      <Header />
      <Sidebar />
      <Dashboard />
    </>
  )
}

export default App
