import React from "react";

export default function Avatar() {
  const userName = "Encara Messi";

  return (
    <div>
      <div className="p-10 max-w-xl mx-auto rounded-3xl bg-medium-grey shadow-xl mt-7 mb-24">
        <div className="py-3 pb-10">
          <h3 className=" text-center text-white font-poppins mr-1 text-4xl">
            Welcome back
          </h3>
          <h3 className=" text-center text-wierdo-orange font-poppins mr-1 text-4xl">
            {userName}
          </h3>
        </div>
        <div className="">
          <figure className="mx-auto">
            <img
              src={`https://avatars.dicebear.com/api/bottts/${userName}.svg`}
              alt="User avatar"
              className="avatar-image"
            />
          </figure>
        </div>
      </div>
    </div>
  );
}
