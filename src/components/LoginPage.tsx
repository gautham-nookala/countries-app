import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Hardcoded credentials
    const VALID_EMAIL = "user@example.com";
    const VALID_PASSWORD = "password123";

    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      // Store login state (simple localStorage implementation)
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
      setError("");

      // Redirect (this will be handled by the router in the main App component)
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
          <h1 className="text-3xl font-inter font-semibold text-column-text text-center mb-6">
            Login
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
              className="block font-assistant text-header-text mb-2"
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
                font-assistant 
                text-column-text
              "
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block font-assistant text-header-text mb-2"
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
                font-assistant 
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
              font-assistant 
              hover:bg-primary-darker 
              transition-colors 
              focus:outline-none 
              focus:ring-2 
              focus:ring-primary-dark
            "
          >
            Login
          </button>

          <p className="text-center text-header-text font-assistant text-sm mt-4">
            Hint: Email is user@example.com, Password is password123
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
