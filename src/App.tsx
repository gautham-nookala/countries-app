// src/App.tsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountriesList from "./components/CountriesList";
import CountryDetail from "./components/CountryDetail";
import Sidebar from "./components/Sidebar";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-app-bg">
        {/* Sidebar - present on all routes */}
        <Sidebar />

        {/* Main content area with responsive margin */}
        <div className="w-full md:ml-72 transition-all duration-300 p-12">
          <Routes>
            <Route path="/" element={<CountriesList />} />
            <Route path="/country/:countryId" element={<CountryDetail />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
