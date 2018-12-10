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
    this.setState(() => ({focus: true}));
  }

  onHandleBlur = () => {
    this.setState(() => ({focus: false}));
  }

  onHandleChange = (event) => {
    const {value: inputValue} = event.target;
    this.setState(() => ({inputValue}))
  };

  renderLabel = label => {
    const {size} = this.props;
    const {focus} = this.state;

    return (
      label ?
        <label
          className={`input-label ${focus ? 'input-label-focused' : ''} input-label-${size}`}
        >
          {label}
        </label>
        : null
    );
  }

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
