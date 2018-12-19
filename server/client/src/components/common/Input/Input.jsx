import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      focus: false,
      inputValue: '',
    };
  }

  onHandleFocus = () => {
    this.setState(() => ({ focus: true }));
  };

  onHandleBlur = () => {
    this.setState(({ inputValue }) => ({
      focus: inputValue.length > 0,
    }));
  };

  onHandleChange = (event) => {
    const {value: inputValue} = event.target;
    this.setState(() => ({
      inputValue,
      focus: inputValue.length > 0,
    }));
  };

  renderLabel = label => {
    const { size } = this.props;
    const { focus } = this.state;
    const focusedWithValue = focus ? 'input-label-focused' : '';
    return (
      label ?
        <label
          className={`input-label ${focusedWithValue} input-label-${size}`}
        >
          {label}
        </label>
        : null
    );
  };

  render() {
    const {label, name} = this.props;
    return (
      <div className="input-wrapper">
        {this.renderLabel(label)}
        <input
          className={`input-input  input-input-${this.props.size}`}
          name={name}
          type="input"
          onChange={this.onHandleChange}
          onFocus={this.onHandleFocus}
          onBlur={this.onHandleBlur}
        />
      </div>
    );
  }
}

Input.propTypes = {
  size: PropTypes.string,
};

Input.defaultProps = {
    size: 'default',
};

export default Input;
