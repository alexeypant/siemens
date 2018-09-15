import React from 'react';
import NewPointFormContainer from '../containers/NewPointForm';
import PointsListContainer from '../containers/PointsList';

const Visual = () => (
    <div className="col-5">
      <NewPointFormContainer />
      <PointsListContainer />
    </div>
  );
export default Visual;