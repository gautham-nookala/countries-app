import { useState } from "react";

interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownProps {
  options: DropdownOption[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

const Dropdown = ({
  options,
  defaultValue,
  onChange,
  placeholder = "Select an option",
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    defaultValue
  );

  const handleOptionClick = (value: string) => {
    setSelectedOption(value);
    setIsOpen(false);
    if (onChange) {
      onChange(value);
    }
  };

  const selectedLabel =
    options.find((opt) => opt.value === selectedOption)?.label || placeholder;

  return (
    <div className="relative">
      {/* Dropdown trigger button */}
      <button
        className="flex items-center justify-between w-40 px-4 py-3 bg-white/25 backdrop-blur-sm text-column-text font-assistant font-semibold text-base rounded-3xl shadow-sm hover:bg-white/30 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="truncate">{selectedLabel}</span>
        <span className="ml-2">
          {/* Placeholder for chevron icon */}
          <div className="w-5 h-5 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`w-4 h-4 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </span>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute z-10 w-full mt-2 bg-white/25 backdrop-blur-sm rounded-xl shadow-md py-2 max-h-80 overflow-y-auto">
          {options.map((option) => (
            <div
              key={option.value}
              className={`px-4 py-2 text-base font-assistant cursor-pointer hover:bg-white/50 transition-colors ${
                option.value === selectedOption
                  ? "font-semibold text-column-text"
                  : "text-column-text/70"
              }`}
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
