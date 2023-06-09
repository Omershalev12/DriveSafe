// Navbar.js
import { Router } from '@material-ui/icons';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';

const Navbar = () => {
  return (
    <Router className="navbar">
      <Button color = "inherit" component={Link} to="/">Home</Button>
      <Button color = "inherit" component={Link} to="/Stats">Stats</Button>
      <Button color = "inherit" component={Link} to="/Articles">Articles</Button>
      <Button color = "inherit" component={Link} to="/MyProfile">My Profile</Button>
    </Router>
  );
};

export default Navbar;
