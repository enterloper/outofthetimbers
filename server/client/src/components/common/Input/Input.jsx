import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    onHandleChange: PropTypes.func.isRequired,
  };

  render() {
    const { onHandleChange } = this.props;
    return (
      <div className="input-wrapper">
        <input
          onChange={onHandleChange}
        />
      </div>
    );
  }
}

export default Input;
