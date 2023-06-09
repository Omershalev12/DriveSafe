import { ListItem } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './Home';
import Stats from './Stats';
import Articles from './Articles';
import Profile from './Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="Stats" element={<Stats />} />
            <Route path="Articles" element={<Articles />} />
            <Route path="Profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
};

export default App;