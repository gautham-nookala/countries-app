import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountriesList from "./components/CountriesList";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<CountriesList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
