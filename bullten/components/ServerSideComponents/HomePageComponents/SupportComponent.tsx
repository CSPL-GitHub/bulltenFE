import React from "react";

const SupportSection = () => {
  return (
    <div className="bg-blue-50 py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-1">
          <h2 className="text-3xl font-bold mb-4">
            Round-the-Clock Customer Support Availability
          </h2>
          <p className="text-gray-600">
            Our high-performance storage network, combined with enterprise
            all-makes our cloud servers transactional.
          </p>
        </div>
        <div className="col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center mb-4">
              <div className="rounded-full p-2 bg-blue-100">
                {/* Icon for Live Chat */}
                <svg
                  className="w-6 h-6 text-blue-500"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.486 2 2 6.485 2 12s4.486 10 10 10c1.667 0 3.233-.415 4.604-1.197l4.119.966-.932-4.003C21.416 15.209 22 13.682 22 12c0-5.514-4.486-10-10-10zm-1 13H8v-2h3v2zm4-3H8v-2h7v2zm0-3H8V7h7v2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold ml-4">Live Chat</h3>
            </div>
            <p className="text-gray-600 mb-4">
              24/7/365 Through the Chat Widget
            </p>
            <a href="#" className="text-blue-600 font-semibold">
              Chat Now &rarr;
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center mb-4">
              <div className="rounded-full p-2 bg-blue-100">
                {/* Icon for Call Center */}
                <svg
                  className="w-6 h-6 text-blue-500"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.486 2 2 6.485 2 12c0 3.467 1.637 6.56 4.318 8.466-.02.18-.057.355-.102.524l-.96 3.608L9.148 22.4a9.984 9.984 0 002.852-.816A9.999 9.999 0 0022 12c0-5.514-4.486-10-10-10zm-1 13H8v-2h3v2zm4-3H8v-2h7v2zm0-3H8V7h7v2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold ml-4">Get in Touch</h3>
            </div>
            <p className="text-gray-600 mb-4">
              9.00AM to 8.00PM Through the Call Center
            </p>
            <a href="#" className="text-blue-600 font-semibold">
              Chat Now &rarr;
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center mb-4">
              <div className="rounded-full p-2 bg-blue-100">
                {/* Icon for Sales Team */}
                <svg
                  className="w-6 h-6 text-blue-500"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.486 2 2 6.485 2 12c0 3.467 1.637 6.56 4.318 8.466-.02.18-.057.355-.102.524l-.96 3.608L9.148 22.4a9.984 9.984 0 002.852-.816A9.999 9.999 0 0022 12c0-5.514-4.486-10-10-10zm-1 13H8v-2h3v2zm4-3H8v-2h7v2zm0-3H8V7h7v2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold ml-4">Sales Team</h3>
            </div>
            <p className="text-gray-600 mb-4">+880 1633 082 302</p>
            <a href="#" className="text-blue-600 font-semibold">
              Chat Now &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportSection;
