import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountriesList from "./components/CountriesList";
import CountryDetail from "./components/CountryDetail";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-app-bg">
        <Sidebar />
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
