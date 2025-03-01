import { useState } from "react";

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const login = (email: string, password: string) => {
    const VALID_EMAIL = "user@example.com";
    const VALID_PASSWORD = "password123";

    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    window.location.href = "/";
  };

  return {
    isLoggedIn,
    login,
    logout,
  };
};

export default useAuth;
