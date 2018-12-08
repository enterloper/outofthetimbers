import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    onHandleChange: PropTypes.func.isRequired,
    onHandleFocus: PropTypes.func,
  };

  static defaultProps = {
    onHandleFocus: (e) => (console.log(e.target.value)),
  };

  render() {
    const { onHandleChange, onHandleFocus } = this.props;
    return (
      <div className="input-wrapper">
        <input
          onChange={onHandleChange}
          onFocus={onHandleFocus}
        />
      </div>
    );
  }
}

export default Input;
