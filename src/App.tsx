import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountriesList from "./components/CountriesList";
import CountryDetail from "./components/CountryDetail";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-app-bg">
        {/* Sidebar - present on all routes */}
        <Sidebar />

        {/* Main content area with left margin to accommodate sidebar */}
        <div className="ml-72 flex-grow p-4">
          <Routes>
            <Route path="/" element={<CountriesList />} />
            <Route path="/country/:countryId" element={<CountryDetail />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
