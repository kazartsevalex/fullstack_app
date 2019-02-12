import React, { Component } from 'react';

class SurveyField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { input, label, meta: { error, touched } } = this.props;

    return (
      <div>
        <label>{label}</label>
        <input {...input} style={{ marginBottom: '5[x' }} />
        <div className="red-text" style={{ marginBottom: '20px' }}>
          {touched && error}
        </div>
      </div>
    );
  }
};

export default SurveyField;
