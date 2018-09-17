import React from 'react';
import { Field, reduxForm } from 'redux-form';

class NewTaskForm extends React.Component {
  addPoint = (value) => {
    this.props.addPoint(value);
    this.props.reset();
  }

  render() {
    return (
      <div className="newPointForm">
        <form onSubmit={this.props.handleSubmit(this.addPoint)}>
          <div className="form-row align-items-center">
            <div className="col-auto">
              <label className="sr-only" htmlFor="inlineFormInputGroup">Username</label>
              <div className="input-group mb-1">
                <div className="input-group-prepend">
                  <div className="input-group-text">Value:</div>
                </div>
                <Field name="value" required component="input" type="number" />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'newTask',
})(NewTaskForm);