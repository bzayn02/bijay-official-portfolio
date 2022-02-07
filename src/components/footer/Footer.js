import React from 'react';
import './footer.style.css';

export const Footer = () => {
   return (
      <div className="footer bg-dark text-white text-center py-5">
         Copyright &copy; Bijay Nagarkoti <br /> Created with 🤍{' '}
         <div>{new Date().getFullYear()}</div>
      </div>
   );
};
