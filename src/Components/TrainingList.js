import React from "react";
import { useState, useEffect } from "react";
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

function TrainingList() {
    const [trainings, setTrainings] = useState([]); 

    useEffect(() => fetchTrainings, []); 

    const fetchTrainings = () => {
        fetch('https://customerrest.herokuapp.com/api/trainings')
        .then(response => response.json())
        .then(data => setTrainings(data.content))
    }

    const colums = [
    {headerName: 'Date', field: 'date', sortable: true, filter: true},
    {headerName: 'Duration', field: 'duration', sortable: true, filter: true},
    {headerName: 'Activity', field: 'activity', sortable: true, filter: true},
    {headerName: 'Content', field: 'content', sortable: true, filter: true}
    ]

    return (
        <div className="ag-theme-material" style={{height: '500px',width:'80%', margin:'auto'}}>
        <AgGridReact
            columnDefs={colums}
            rowData={trainings}>
        </AgGridReact> 
        </div>
    );
    
}
export default TrainingList;