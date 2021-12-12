import React from "react";
import { useState, useEffect, useRef } from "react";
import { AgGridReact } from 'ag-grid-react';
import { Button } from "@mui/material";

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

function CustomerList() {
    const [customers, setCustomers] = useState([]); 

    useEffect(() => fetch('https://customerrest.herokuapp.com/api/customers')
    .then(response => response.json())
    .then(data => setCustomers(data.content)), []); 

    const gridRef = useRef();

    const deleteTodo = () => {
        if (gridRef.current.getSelectedNodes().length > 0) {
            if (window.confirm('Are you sure?')) {
                setCustomers(customers.filter((customer, index) => index !== gridRef.current.getSelectedNodes()[0].childIndex))
            }
        } else {
          alert('Select row first');
        }
      }

    const colums = [
    {headerName: 'First Name', field: 'firstname', sortable: true, filter: true},
    {headerName: 'Last Name', field: 'lastname', sortable: true, filter: true},
    {headerName: 'Address', field: 'streetaddress', sortable: true, filter: true},
    {headerName: 'Postal Code', field: 'postcode', sortable: true, filter: true},
    {headerName: 'City', field: 'city', sortable: true, filter: true},
    {headerName: 'E-mail', field: 'email', sortable: true, filter: true},
    {headerName: 'Phone', field: 'phone', sortable: true, filter: true},
    {field: 'links.0.href'}
    ]

    return (
        <div className="ag-theme-material" style={{height: '900px',width:'80%', margin:'auto'}}>
        <Button margin='auto' variant="contained" color='error' onClick={deleteTodo}> Delete selected row</Button>
        <AgGridReact
            ref={gridRef}
            onGridReady={params => gridRef.current = params.api}
            rowSelection="single"
            columnDefs={colums}
            rowData={customers}
            animateRows={true}>
        </AgGridReact> 
        </div>
    );
    
}
export default CustomerList;