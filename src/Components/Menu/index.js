import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Hidden from 'material-ui/Hidden';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import { Link } from "react-router-dom";
import './menu.css'

const drawerWidth = 240;

const styles = theme => ({
  TopNav: {
    background: '#212529',
    borderBottom: '.01em solid #dc3545',
  },
  drawerPaper: {
    position: 'fixed',
    width: drawerWidth,
    Height: '100vh',
    borderRight: '.01em solid #dc3545',
    backgroundColor: '#212529'
  },
  drawerHeader: {
    display: 'flex',
    justifyContent: 'center',
    ...theme.mixins.toolbar,
  }
});

class PersistentDrawer extends React.Component {
  state = {
    open: false,
    anchor: 'left',
  };

  handleDrawerOpen = () => {
    this.setState({ open: !this.state.open });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleChangeAnchor = event => {
    this.setState({
      anchor: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    const { anchor, open } = this.state;

    const drawer = (
      <Drawer
        variant="persistent"
        anchor={anchor}
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={this.handleDrawerClose}>
            <List className="logo"><Link to="/">LOGO</Link></List>
          </IconButton>
        </div>
        <Divider />
        <List onClick={this.handleDrawerClose}><Link to="/">Home</Link></List>
        <Divider />
        <List onClick={this.handleDrawerClose}><Link to="/contact">Contact</Link></List>
        <Divider />
        <List onClick={this.handleDrawerClose}><Link to="/about">About</Link></List>
      </Drawer>
    );

    let before = null;
    let after = null;

    if (anchor === 'left') {
      before = drawer;
    } else {
      after = drawer;
    }
    return (
      <div>
        {before}
        {after}
        <AppBar className={classes.TopNav}>
          <Toolbar className="larg-nav">
            <Link to="/" className="brand-link">
              <Typography className="navbar-brand" variant="title" color="inherit" noWrap>
                DwinaTech
              </Typography>
            </Link>
            <Hidden mdUp>
              <button onClick={this.handleDrawerOpen} className="navbar-toggler navbar-toggler-right" type="button">
                Menu
                <i className="fa fa-bars" />
              </button>
            </Hidden>
            <Hidden smDown>
              <div className="list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About</Link></li>
              </div>
            </Hidden>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

PersistentDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(PersistentDrawer);
