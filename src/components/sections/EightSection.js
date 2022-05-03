import React from "react";

function EightSection() {
  return (
    <div className="mt-10 ">
      <div className="text-center">
        <h1 className="text-2xl font-semibold px-24  ">
          Epic events and incredible deals straight to your inbox.
        </h1>
        <h6 className="px-24 ">
          Get notified of all the exciting events happening close to you, NO
          SPAM we promise!
        </h6>
      </div>

      <form className="text-center mt-5">
        <input
          className="w-34 border border-gray-300 px-12 py-2 rounded-l-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          placeholder="Enter e-mail adress here"
          type="email"
          id="email"
          name="email"
        />

        <button className="bg-blue-500 px-5 py-2 rounded-r-lg text-white text-sm">
          Join the list
        </button>
      </form>
    </div>
  );
}

export default EightSection;
