import React from 'react';

import CustomerList from './Components/CustomerList';
import SearchAppBar from './Components/AppBar';


function Customers() {
  return (
    <div className="App">
      <SearchAppBar />
      <CustomerList />
    </div>
  );
}

export default Customers;