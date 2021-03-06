import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Button from 'reusable/UI/Button'
import {InputField} from 'reusable/UI/Input'

const validate = (values) => {
  const errors = {}
  if (!values.nameBook) {
    errors.nameBook = 'Required'
  }
  return errors
}

const warn = (values) => {
  const warnings = {}
  if (values.nameBook && values.nameBook.length < 5) {
    warnings.nameBook = 'Hmm, you book name is bit short...'
  }
  return warnings
}

const renderField = props => (
  <InputField {...props}>
    <span className="icon is-small is-left">
      <i className="fa fa-user" />
    </span>
    <span className="icon is-small is-right">
      <i className="fa fa-check" />
    </span>
  </InputField>
)

class AddBookForm extends Component {
  render() {
    const {
      handleSubmit,
      onFormSubmit,
    } = this.props;
    return (
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <h3>Add a book</h3>
        <Field name="nameBook" component={renderField} type="text" label="nameBook" />
        <Button type="submit" title="Submit" />
      </form>
    );
  }
}

// Decorate the form component
export default reduxForm({
  form: 'addBook', // a unique name for this form
  validate,
  warn,
})(AddBookForm);
