import React from 'react';
import NewPointFormContainer from '../containers/NewPointForm';
import PointsListContainer from '../containers/PointsList';

const Visual = () => (
    <div className="col-5">
      <div className="row">
        <div>
          <div className="col-sm-6">graph graph graph graph graph</div>
        </div>
        <div className="col-sm-6">
          <NewPointFormContainer />
          <PointsListContainer />
        </div>
      </div>
      
      
    </div>
  );
export default Visual;