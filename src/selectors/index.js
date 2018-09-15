import { createSelector } from 'reselect';

export const getPoints = state => state.points;
export const pointsSelector = createSelector(
  getPoints,
  points => Object.values(points),
);