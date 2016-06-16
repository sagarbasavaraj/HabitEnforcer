import React, {PropTypes} from 'react';

const Container = ({className, children}) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

Container.propTypes = {
  className:PropTypes.string,
  children:PropTypes.any
}

export default Container;
