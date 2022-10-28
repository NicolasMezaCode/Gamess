import React from 'react';

const Footer = () => {
    return (
      <footer class="mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8">
        <div class="border-t border-slate-900/5 py-10">
          <svg  class="mx-auto h-5 w-auto text-slate-900"
                aria-hidden="true"
                viewBox="0 0 160 24"
                fill="none">
            <path class="fill-sky-400"></path>
            <path fill="currentColor"></path>

          </svg>
          <p class="mt-5 text-center text-sm leading-6 text-slate-500">
            Nicolas Meza Gordon Mathew Corp. All rights reserved.
          </p>
          <div class="mt-16 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-slate-700">
            <a href="">Instagram</a>
            <div class="h-4 w-px bg-slate-500/20"></div>
            <a href="">Github</a>
          </div>
        </div>
      </footer>
    );
};

export default Footer;