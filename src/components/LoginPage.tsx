import { useState } from "react";
import useAuth from "../hooks/useAuth";
import SocialButtons from "./SocialButtons";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (login(email, password)) {
      window.location.href = "/";
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex bg-white rounded-3xl overflow-hidden">
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

          <SocialButtons />

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
