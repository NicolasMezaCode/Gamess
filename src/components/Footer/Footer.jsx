import React from 'react';

const Footer = () => {
  return (
    <footer class="text-not-white bg-zinc-800 mx-auto w-full max-w-container px-1 sm:px-6 lg:px-8 ">
      <div class="border-t border-slate-900/5 py-10">
        <p class="mt-5 text-center text-sm leading-6">
          Designed by: Nicolas Meza Gordon Mateo.  All rights reserved.
        </p>
        <div class="mt-5 flex items-center justify-center space-x-4 text-sm font-semibold">
          <a href="">Instagram</a>
          <div class="h-4 w-px bg-not-white"></div>
          <a href="">Github</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;