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
        className="flex items-center justify-between w-[10.5em] px-4 py-3 bg-white text-column-text font-semibold text-base rounded-3xl shadow-card"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="mr-2">{selectedLabel}</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="currentColor"
            className="stroke-primary-darker"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute z-50 w-[10.5em] mt-2 bg-white rounded-xl shadow-card py-5">
          <div className="px-5 py-0 space-y-4">
            {options.map((option) => (
              <div
                key={option.value}
                className="py-1 text-base cursor-pointer text-header-text hover:text-column-text hover:font-semibold transition-colors flex items-center relative"
                onClick={() => handleOptionClick(option.value)}
              >
                <span
                  className={
                    option.value === selectedOption
                      ? "font-semibold text-column-text"
                      : ""
                  }
                >
                  {option.label}
                </span>
                {option.value === selectedOption && (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-0"
                  >
                    <path
                      opacity="0.7"
                      d="M16.6666 5L7.49992 14.1667L3.33325 10"
                      stroke="currentColor"
                      className="stroke-column-text"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
