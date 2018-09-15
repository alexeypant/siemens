import _ from 'lodash';
import { createAction } from 'redux-actions';

const getTime = () => {
  const date = new Date();
  const timeString = `${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`;
  return { date, timeString };
};

export const addPoint = createAction('POINT_ADD', point =>
  ({ point: { ...point, id: _.uniqueId(), time: getTime().timeString, fullDate: getTime().date } }));
export const removePoint = createAction('POINT_REMOVE');
