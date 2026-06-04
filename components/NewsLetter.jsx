import React from "react";

const NewsLetter = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-2 pt-8 pb-14">
      <h1 className="md:text-4xl text-2xl font-medium">
        Subscribe now & get 20% off
      </h1>
      <p className="md:text-base text-gray-500/80 pb-8">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex items-center justify-between max-w-2xl w-full md:h-14 h-12"
      >
        <input
          className="border border-gray-500/30 rounded-md h-full border-r-0 outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:border-transparent w-full rounded-r-none px-3 text-gray-500"
          type="email"
          placeholder="Enter your email id"
          required
          aria-label="Email address for newsletter"
        />
        <button
          type="submit"
          className="md:px-12 px-8 h-full text-white bg-orange-600 hover:bg-orange-700 focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-2 focus-visible:outline-none transition-colors rounded-md rounded-l-none"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
