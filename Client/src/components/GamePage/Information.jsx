import React from "react";

export default function Information() {
  return (
    <div className="p-5 text-3xl text-not-white min-h-fit">
      <div className="p-12 h-48 max-w-screen-xl mx-auto rounded-md bg-medium-grey shadow-xl hover:drop-shadow-lg transition-all duration-300 ease-linear">
        <div className="grid grid-col-4 grid-flow-col gap-4">
          <h2>HowLongToBeat</h2>
          <div>
            <ul>
              <li>Main Story</li>
              <li>12 hours</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Story + Sides</li>
              <li>15 hours</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Everything</li>
              <li>16 hours</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
