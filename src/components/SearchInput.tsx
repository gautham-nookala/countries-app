import { useState } from "react";

interface SearchProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
  className?: string;
}

const SearchIcon = ({ isFocused }: { isFocused?: boolean }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={isFocused ? "opacity-100" : "opacity-80"}
  >
    <g opacity="0.8">
      <circle
        cx="7"
        cy="7"
        r="5"
        stroke={isFocused ? "#202543" : "#9B9EAC"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6667 10.6667L14.0001 14"
        stroke={isFocused ? "#202543" : "#9B9EAC"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

const SearchInput = ({
  onSearch,
  placeholder = "Search",
  className = "",
}: SearchProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch?.(query);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(searchQuery);
  };

  return (
    <form
      onSubmit={handleSearch}
      className={`
        flex flex-row items-center 
        w-72 
        h-12
        px-4 py-0 
        gap-3 
        bg-white/25 
        rounded-3xl
        shadow-[0px_6px_12px_rgba(142,152,157,0.08)]
        backdrop-blur-[5px]
        border border-white/25
        ${className}
      `}
    >
      <div className="flex-shrink-0">
        <SearchIcon isFocused={isFocused} />
      </div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        className={`
          flex-grow 
          bg-transparent 
          text-sm 
          font-assistant 
          outline-none 
          w-full
          ${isFocused ? "text-column-text" : "text-header-text"}
        `}
      />
    </form>
  );
};

export default SearchInput;
