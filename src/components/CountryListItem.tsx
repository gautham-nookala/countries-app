import { Link } from "react-router-dom";

interface CountryListItemProps {
  cca3: string;
  name: string;
  continent: string;
}

const CountryListItem = ({ cca3, name, continent }: CountryListItemProps) => (
  <Link
    to={`/country/${cca3}`}
    className="bg-white rounded-xl shadow-card h-20 hover:shadow-lg transition-shadow duration-300"
  >
    <div className="grid grid-cols-12 h-full items-center text-base font-semibold text-column-text">
      <div className="col-span-3 pl-6 md:pl-12 flex items-center">
        <div className="w-12 h-12 rounded-full bg-gray-100"></div>
      </div>

      <h2 className="col-span-5">{name}</h2>

      <p className="col-span-4">{continent}</p>
    </div>
  </Link>
);

export default CountryListItem;
