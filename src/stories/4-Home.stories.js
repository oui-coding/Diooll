import React from 'react';
import Home from '../pages/Home';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Home',
};

export const home = () => (
  <MemoryRouter>
    <Home />
  </MemoryRouter>
);
