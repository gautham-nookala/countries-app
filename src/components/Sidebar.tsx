import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button - only visible on small screens */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed z-50 top-4 right-4 w-10 h-10 rounded-full bg-heading-color text-white flex items-center justify-center md:hidden"
      >
        {isOpen ? (
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Sidebar - hidden on mobile unless toggled */}
      <div
        className={`fixed left-0 top-0 h-full bg-white/80 backdrop-blur-xl rounded-[2em] z-40 transition-all duration-300 ease-in-out font-inter ${
          isOpen
            ? "w-64 translate-x-0"
            : "w-64 -translate-x-full md:translate-x-0 md:left-2 md:top-2 md:h-[calc(100vh-1em)]"
        }`}
      >
        {/* Divider lines */}
        <div className="border-b border-primary-dark/5 mx-8 pt-12"></div>

        {/* User profile */}
        <div className="flex items-center gap-4 mx-8 mt-8">
          <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
            {/* User avatar would go here */}
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-base text-column-text opacity-70">
              Brian Johnson
            </span>
            <span className="font-normal text-xs text-column-text opacity-70">
              Edit Profile
            </span>
          </div>
        </div>

        {/* Second divider */}
        <div className="border-b border-primary-dark/5 mx-8 mt-10"></div>

        {/* Navigation items */}
        <div className="mx-8 mt-6 flex flex-col gap-5">
          {/* Countries navigation item */}
          <Link
            to="/"
            className="flex items-center gap-4"
            onClick={() => setIsOpen(false)}
          >
            <div className="w-11 h-11 bg-heading-color rounded-full flex items-center justify-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <g clipPath="url(#clip0_3_1396)">
                  <path
                    d="M6.66658 15L0.833252 18.3333V5.00001L6.66658 1.66667M6.66658 15L13.3333 18.3333M6.66658 15V1.66667M13.3333 18.3333L19.1666 15V1.66667L13.3333 5.00001M13.3333 18.3333V5.00001M13.3333 5.00001L6.66658 1.66667"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3_1396">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <span className="font-semibold text-base text-column-text opacity-70">
              Countries
            </span>
          </Link>
        </div>

        {/* Logout button at bottom */}
        <div className="absolute bottom-8 left-8 flex items-center gap-4">
          <div className="w-11 h-11 bg-heading-color/[0.04] rounded-full flex items-center justify-center">
            <svg
              className="w-5 h-5 text-column-text"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
          </div>
          <span className="font-semibold text-base text-column-text opacity-70">
            Logout
          </span>
        </div>
      </div>

      {/* Overlay to close sidebar on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
