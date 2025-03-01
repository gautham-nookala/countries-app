import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import CountriesList from "./components/CountriesList";
import CountryDetail from "./components/CountryDetail";
import Sidebar from "./components/Sidebar";
import LoginPage from "./components/LoginPage";
import { JSX } from "react";
import useAuth from "./hooks/useAuth";

// Protected Route Component
const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

const App = () => {
  const { isLoggedIn } = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/" /> : <LoginPage />}
        />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <div className="flex min-h-screen bg-app-bg">
                <Sidebar />
                <div className="w-full md:ml-72 transition-all duration-300 p-12">
                  <Outlet />
                </div>
              </div>
            </ProtectedRoute>
          }
        >
          <Route index element={<CountriesList />} />
          <Route path="/country/:countryId" element={<CountryDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
