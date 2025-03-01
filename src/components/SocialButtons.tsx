const SocialButtons = () => {
  return (
    <>
      <button className="flex items-center justify-center gap-2 w-full border border-header-text/30 rounded-full py-3 px-4 text-sm">
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.52 12.273C23.52 11.4221 23.4436 10.6039 23.3018 9.81848H12V14.4603H18.4582C18.18 15.9603 17.3345 17.2312 16.0636 18.0821V21.093H19.9418C22.2109 19.0039 23.52 15.9276 23.52 12.273Z"
            fill="#E8E8E8"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 23.9999C15.24 23.9999 17.9564 22.9254 19.9418 21.0926L16.0636 18.0817C14.9891 18.8017 13.6145 19.2272 12 19.2272C8.87455 19.2272 6.22909 17.1163 5.28546 14.2799H1.27637V17.389C3.25091 21.3108 7.30909 23.9999 12 23.9999Z"
            fill="#B1B2B1"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.28545 14.2801C5.04545 13.5601 4.90909 12.791 4.90909 12.0001C4.90909 11.2091 5.04545 10.4401 5.28545 9.72005V6.61096H1.27636C0.463636 8.23096 0 10.0637 0 12.0001C0 13.9364 0.463636 15.7691 1.27636 17.3891L5.28545 14.2801Z"
            fill="#888888"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 4.77286C13.7618 4.77286 15.3436 5.37832 16.5873 6.56741L20.0291 3.12559C17.9509 1.18923 15.2345 0.000137329 12 0.000137329C7.30909 0.000137329 3.25091 2.68923 1.27637 6.61105L5.28546 9.72014C6.22909 6.88377 8.87455 4.77286 12 4.77286Z"
            fill="#616161"
          />
        </svg>
        Sign up with Google
      </button>
      <button className="flex items-center justify-center gap-2 w-full border border-header-text/30 rounded-full py-3 px-4 text-sm">
        <svg
          className="w-5 h-5"
          viewBox="0 0 26 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5002 1.58984H2.05377V12.0363H12.5002V1.58984Z"
            fill="#D5D5D5"
          />
          <path
            d="M12.5002 13.197H2.05377V23.6434H12.5002V13.197Z"
            fill="#BABABA"
          />
          <path
            d="M24.1073 1.58984H13.6609V12.0363H24.1073V1.58984Z"
            fill="#8F8F8F"
          />
          <path
            d="M24.1073 13.197H13.6609V23.6434H24.1073V13.197Z"
            fill="#999999"
          />
        </svg>
        Sign up with Microsoft
      </button>
    </>
  );
};

export default SocialButtons;
