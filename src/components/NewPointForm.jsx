import React from 'react';
import { Field, reduxForm } from 'redux-form';

class NewTaskForm extends React.Component {
  addPoint = (value) => {
    this.props.addPoint(value);
    this.props.reset();
  }

  render() {
    return (
      <form className="form-inline" onSubmit={this.props.handleSubmit(this.addPoint)}>
        <div className="form-group mx-3">
          <Field name="text" required component="input" type="text" />
        </div>
        {/* <button type="submit" className="btn btn-primary btn-sm">Add</button> */}
      </form>
    );
  }
}

export default reduxForm({
  form: 'newTask',
})(NewTaskForm);