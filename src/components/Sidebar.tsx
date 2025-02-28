import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div className="fixed left-2 top-2 w-64 h-[calc(100vh-16px)] bg-white/80 backdrop-blur-xl rounded-[2em]">
      {/* Divider lines */}
      <div className="border-b border-primary-dark/5 mx-8 pt-12"></div>

      {/* User profile */}
      <div className="flex items-center gap-4 mx-8 mt-8">
        <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
          {/* User avatar would go here */}
        </div>
        <div className="flex flex-col">
          <span className="font-inter font-semibold text-base text-column-text opacity-70">
            Brian Johnson
          </span>
          <span className="font-inter font-normal text-xs text-column-text opacity-70">
            Edit Profile
          </span>
        </div>
      </div>

      {/* Second divider */}
      <div className="border-b border-primary-dark/5 mx-8 mt-10"></div>

      {/* Navigation items */}
      <div className="mx-8 mt-6 flex flex-col gap-5">
        {/* Countries navigation item */}
        <Link to="/" className="flex items-center gap-4">
          <div className="w-11 h-11 bg-heading-color rounded-full flex items-center justify-center">
            <svg
              className="w-5 h-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="10" r="3" />
              <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z" />
            </svg>
          </div>
          <span className="font-inter font-semibold text-base text-column-text opacity-70">
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
        <span className="font-inter font-semibold text-base text-column-text opacity-70">
          Logout
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
