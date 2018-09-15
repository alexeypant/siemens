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
        {points.map(({ id, text }) => (
          <li key={id} className="list-group-item d-flex justify-content-end">
            <div className="mr-auto">{text}</div>
            <button className="btn border-0 p-0 app-remove-task" onClick={this.removePoint(id)}>x</button>
          </li>
        ))}
      </ul>);
  }

  render() {
    const { points } = this.props;

    if (points.length === 0) {
      return null;
    }

    return (
      <div className="mt-3">
        {this.renderPoints()}
      </div>
    );
  }
}