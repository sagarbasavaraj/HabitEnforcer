import React, {PropTypes} from 'react';

const TextField = ({type, min, max, value, onChange}) => {
  return(
    <input type={type}
        min={min}
        max={max}
        value={value}
        onChange={onChange}
    />
  );
}

TextField.propTypes = {
  type:PropTypes.string.isRequired,
  min:PropTypes.number,
  max:PropTypes.number,
  value:PropTypes.any.isRequired,
  onChange:PropTypes.func
}

TextField.defaultProps = {
  type:'text',
  min:0,
  max:0,
  value:''
}

export default TextField;
