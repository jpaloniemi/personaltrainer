import React from "react";
import { useState, useEffect } from "react";
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

function CustomerList() {
    const [customers, setCustomers] = useState([]); 

    useEffect(() => fetchCustomers, []); 

    const fetchCustomers = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then(data => setCustomers(data.content))
    }

    const colums = [
    {headerName: 'First Name', field: 'firstname', sortable: true, filter: true},
    {headerName: 'Last Name', field: 'lastname', sortable: true, filter: true},
    {headerName: 'Address', field: 'streetaddress', sortable: true, filter: true},
    {headerName: 'Postal Code', field: 'postcode', sortable: true, filter: true},
    {headerName: 'City', field: 'city', sortable: true, filter: true},
    {headerName: 'E-mail', field: 'email', sortable: true, filter: true},
    {headerName: 'Phone', field: 'phone', sortable: true, filter: true}
    ]

    return (
        <div className="ag-theme-material" style={{height: '1000px',width:'80%', margin:'auto'}}>
        <AgGridReact
            columnDefs={colums}
            rowData={customers}>
        </AgGridReact> 
        </div>
    );
    
}
export default CustomerList;