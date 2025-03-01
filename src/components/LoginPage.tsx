import { useState } from "react";
import useAuth from "../hooks/useAuth";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (login(email, password)) {
      // Redirect will be handled by the router
      window.location.href = "/";
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex bg-white rounded-3xl overflow-hidden">
      {/* Left side - Login Form */}
      <div className="w-1/2 flex items-center justify-center p-8">
        <div className="max-w-md w-full">
          <div className="mb-8">
            <h1 className="text-3xl font-inter font-semibold text-column-text mb-2">
              Welcome Back!
            </h1>
            <p className="text-header-text">
              Learn all about the countries of the world
            </p>
          </div>

          {/* Social Sign in */}
          <div className="flex gap-4 mb-6">
            <button className="flex items-center justify-center gap-2 w-1/2 border border-header-text/30 rounded-full py-4 px-6 text-sm">
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
            <button className="flex items-center justify-center gap-2 w-1/2 border border-header-text/30 rounded-full py-4 px-6 text-sm">
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
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-header-text/30"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-header-text">
                or continue with email
              </span>
            </div>
          </div>

          {error && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl mb-4"
              role="alert"
            >
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-header-text/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-dark text-column-text"
                placeholder="john@gmail.com"
              />
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border border-header-text/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-dark text-column-text"
                placeholder="••••••••••••••••"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                onClick={() => setShowPassword(!showPassword)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-header-text"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {showPassword ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  )}
                </svg>
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-primary-dark text-white rounded-full hover:bg-primary-darker transition-colors"
              aria-label="Log In"
            >
              Log In
            </button>
          </form>

          <p className="text-header-text text-sm mt-6">
            Don't have an account?{" "}
            <a href="#" className="text-primary-dark font-medium">
              Sign In
            </a>
          </p>
        </div>
      </div>

      {/* Right side - Purple Gradient with Info */}
      <div className="w-1/2 bg-gradient-to-br from-[#6700E9] to-[#D83AFF] p-16 flex flex-col justify-center relative overflow-hidden">
        <div className="text-white mb-32">
          <h2 className="text-4xl font-semibold leading-tight mb-4">
            The simplest way to track and manage your geographical data
          </h2>
          <p className="text-lg">
            Enter your credentials and access your account
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
