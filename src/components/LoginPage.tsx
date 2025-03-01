import { useState } from "react";
import useAuth from "../hooks/useAuth";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();

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
    <div className="min-h-screen bg-app-bg flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <form
          onSubmit={handleLogin}
          className="bg-white shadow-card rounded-xl p-8 space-y-6"
        >
          <h1 className="text-3xl font-inter font-semibold text-column-text mb-6">
            Welcome Back!
          </h1>

          {error && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              {error}
            </div>
          )}

          <div>
            <label
              htmlFor="email"
              className="block text-header-text mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="
                w-full 
                px-4 
                py-3 
                border 
                border-header-text/30 
                rounded-xl 
                focus:outline-none 
                focus:ring-2 
                focus:ring-primary-dark 
                text-column-text
              "
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-header-text mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="
                w-full 
                px-4 
                py-3 
                border 
                border-header-text/30 
                rounded-xl 
                focus:outline-none 
                focus:ring-2 
                focus:ring-primary-dark 
                text-column-text
              "
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="
              w-full 
              py-3 
              bg-primary-dark 
              text-white 
              rounded-xl 
              hover:bg-primary-darker 
              transition-colors 
              focus:outline-none 
              focus:ring-2 
              focus:ring-primary-dark
            "
          >
            Login
          </button>

          <p className="text-center text-header-text text-sm mt-4">
            Hint: Email is user@example.com, Password is password123
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
