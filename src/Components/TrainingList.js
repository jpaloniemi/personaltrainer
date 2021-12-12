import React from "react";
import { useState, useEffect, useRef } from "react";
import { AgGridReact } from 'ag-grid-react';
import { Button } from "@mui/material";


import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

function TrainingList() {
    const [trainings, setTrainings] = useState([]); 

    useEffect(() => fetch('https://customerrest.herokuapp.com/api/trainings')
    .then(response => response.json())
    .then(data => setTrainings(data.content)), []);

    const gridRef = useRef();

    const deleteTodo = () => {
        if (gridRef.current.getSelectedNodes().length > 0) {
            if (window.confirm('Are you sure?')) {
                setTrainings(trainings.filter((training, index) => index !== gridRef.current.getSelectedNodes()[0].childIndex))
            }
        } else {
          alert('Select row first');
        }
      }

    const colums = [
    {headerName: 'Date', field: 'date', type:'dateColumn', sortable: true, filter: true},
    {headerName: 'Duration', field: 'duration', sortable: true, filter: true},
    {headerName: 'Activity', field: 'activity', sortable: true, filter: true}
    ]

    return (
        <div className="ag-theme-material" style={{height: '1000px',width:'80%', margin:'auto'}}>
        <Button margin='auto' variant="contained" color='error' onClick={deleteTodo}> Delete selected row</Button>
        <AgGridReact
            ref={gridRef}
            onGridReady={params => gridRef.current = params.api}
            rowSelection="single"
            columnDefs={colums}
            rowData={trainings}
            animateRows={true}>
        </AgGridReact> 
        </div>
    );
    
}
export default TrainingList;