import React from 'react';
import Header from '../components/Header';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Header',
};

export const header = () => (
  <MemoryRouter>
    <Header />
  </MemoryRouter>
);
