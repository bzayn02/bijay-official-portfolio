import React from 'react';

import { Footer } from '../footer/Footer';
// import {Goup} from "../go-upBtn/Goup"

export const MainLayout = ({ children }) => {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
};
