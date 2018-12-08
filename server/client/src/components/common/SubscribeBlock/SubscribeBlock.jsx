import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';

const SubscribeBlock = (props) => {
  const { onHandleChange } = props;
  return (
    <div>
      <Input
        onHandleChange={onHandleChange}
      />
    </div>
  );
};

SubscribeBlock.propTypes = {
  onHandleChange: PropTypes.func.isRequired,
};

export default SubscribeBlock;
