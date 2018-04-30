import React from 'react';
import { Route } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Home from '../Home';
import Menu from '../Menu';
import About from '../About';
import Contact from '../Contact';

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  content: {
    Height: '100vh',
    zIndex: 1,
    overflowY: 'auto',
    position: 'relative',
    display: 'flex',
    width: '100vw',
  },
});

const Routes = (props) => {
  const { classes, theme } = props;
  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <div className={classes.drawerHeader} />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Menu />
      </main>
    </div>
  );
}

Routes.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Routes);
