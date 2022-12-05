import React from 'react';

const Footer = () => {
  return (
    <footer className="text-not-white bg-zinc-800 mx-auto w-full max-w-container px-1 sm:px-6 lg:px-8">
      <div className="border-t border-slate-900/5 py-10">
        <p className="mt-5 text-center text-sm leading-6">
          Designed by: Nicolas Meza and Gabriel Soares
        </p>
        <div className="mt-5 flex items-center justify-center space-x-4 text-sm font-semibold">
          <a href="https://www.instagram.com/sbsgabriel/" target="_blank" className='transition-all duration-300 ease-linear hover:text-wierdo-orange'>Gabriel Instagram</a>
          <div className="h-4 w-px bg-not-white"></div>
          <a href="https://www.instagram.com/nicolas_m.g1/" target="_blank" className='transition-all duration-300 ease-linear hover:text-wierdo-orange'>Nicolas Instagram</a>
          <div className="h-4 w-px bg-not-white"></div>
          <a href="https://github.com/MendigoPower/final-project" target="_blank" className='transition-all duration-300 ease-linear hover:text-wierdo-orange'>Github</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;