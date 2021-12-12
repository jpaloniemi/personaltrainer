import React from 'react';

import TrainingList from './Components/TrainingList';
import SearchAppBar from './Components/AppBar';



function Trainings() {
  return (
    <div className="App">
      <SearchAppBar />
      <TrainingList />
    </div>
  );
}

export default Trainings;