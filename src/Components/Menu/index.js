// import React from 'react';
// import { Link } from "react-router-dom";
// import './menu.css'

// const Menu = () => (
//   <div>
//     <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
//       <div className="container">
//         <Link className="navbar-brand js-scroll-trigger" to="/">Dwina Tech</Link>
//         <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
//           Menu
//           <i className="fa fa-bars" />
//         </button>
//         <div className="collapse navbar-collapse" id="navbarResponsive">
//           <ul className="navbar-nav text-uppercase ml-auto">
//             <li className="nav-item">
//               <Link className="nav-link js-scroll-trigger" to="/">Home</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link js-scroll-trigger" to="about">About</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link js-scroll-trigger" to="contact">Contact</Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   </div>
// );

// export default Menu;

import React from 'react';
import { Route } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Hidden from 'material-ui/Hidden';
import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import { MenuItem } from 'material-ui/Menu';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Link } from "react-router-dom";
import './menu.css'

const drawerWidth = 240;

const styles = theme => ({
  TopNav: {
    background: '#212529',
    borderBottom: '.01em solid #dc3545',
  },
  drawerPaper: {
    position: 'absolute',
    width: drawerWidth,
    Height: '100vh',
    borderRight: '.01em solid #dc3545',
    backgroundColor: '#212529'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
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
    const { classes, theme } = this.props;
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
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(PersistentDrawer);
