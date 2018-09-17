import React from 'react';

export default class PointsList extends React.Component {

  removePoint = id => (e) => {
    e.preventDefault();
    this.props.removePoint({ id });
  }

  renderPoints() {
    const points = this.props.points;
    return (
      <ul className="list-group">
        {points.map(({ id, value, date }) => {
          return <li key={id} className="list-group-item d-flex justify-content-end">
            <div className="mr-auto">
            {`${ new Date(date).getMinutes()}:${new Date(date).getSeconds()}:${new Date(date).getMilliseconds()} val: ${value}`}</div>
            <button className="btn btn-secondary" onClick={this.removePoint(id)}>REMOVE</button>
          </li>
        })}
      </ul>);
  }

  render() {
    const { points } = this.props;
    if (points.length === 0) {
      return null;
    }
    return (
      <div className="pointsList">
        {this.renderPoints()}
      </div>
    );
  }
}
