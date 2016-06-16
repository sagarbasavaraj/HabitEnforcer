import React, {PropTypes} from 'react';
import Container from '../../base/components/Container';
import AppBar from 'material-ui/AppBar';
import FloatingActionButton from 'material-ui/FloatingActionButton';

const Welcome = ({className}) => {
  return(
    <Container className="main-container">
        <AppBar
          title="Habit Enforcer" showMenuIconButton={false}
        />
        <div className="jumbotron">
          <h1 className="title">Welcome to Habit Enforcer</h1>
          <p className="subTitle">Track your daily habits</p>
          <FloatingActionButton secondary={true}>
            <span>GO</span>
          </FloatingActionButton>
        </div>
    </Container>
  );
}

Welcome.propTypes = {
  className:PropTypes.string
}
export default Welcome;
