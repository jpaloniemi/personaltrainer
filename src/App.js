import React from 'react';
import './App.css';




import CustomerList from './Components/CustomerList';
import SearchAppBar from './Components/AppBar';



function App() {
  return (
    <div className="App">
      <SearchAppBar />
      <CustomerList />
    </div>
  );
}

export default App;
