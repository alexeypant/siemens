import React from 'react';
import NewPointFormContainer from '../containers/NewPointForm';
import PointsListContainer from '../containers/PointsList';
import Graph from '../containers/Graph';

const Visual = () => (
    <div className="visual">
      <div className="chart">
        <Graph />
      </div>
      <div className="points">
        <NewPointFormContainer />
        <PointsListContainer />
      </div> 
    </div>
  );
  
export default Visual;
