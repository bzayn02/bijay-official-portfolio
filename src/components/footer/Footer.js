import React from 'react';
import './footer.style.css';

export const Footer = () => {
   return (
      <div className="footer text-white text-center py-5">
         &copy; <span>{new Date().getFullYear()}</span> Bijay Nagarkoti <br />{' '}
         Created with 🤍{' '}
      </div>
   );
};
