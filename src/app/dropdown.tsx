import { SetStateAction, useState } from "react";

export default function Dropdown() {
  const options = [
    { value: "en", label: "🇬🇧 EN" },
    { value: "es", label: "🇪🇸 ES" },
    { value: "fr", label: "🇫🇷 FR" },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [showOptions, setShowOptions] = useState(false);

  const handleOptionClick = (option: SetStateAction<{ value: string; label: string; }>) => {
    setSelectedOption(option);
    setShowOptions(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowOptions(!showOptions)}
        className="flex items-center font-sans font-medium text-[0.rem] rounded-2xl appearance-none w-[5rem] bg-white border border-gray-300 text-gray-700 py-2 px-1 pr-2 leading-tight focus:outline-none focus:bg-white"
      >
        <span className="mr-1">{selectedOption.label}</span>
        <svg
          className={`w-4 h-4 ${showOptions ? 'transform rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>

      {/* Dropdown Options */}
      {showOptions && (
        <ul className="absolute top-8 left-0 z-10 bg-white border border-gray-300 rounded mt-1">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleOptionClick(option)}
              className={`cursor-pointer py-2 px-4 hover:bg-gray-100 text-[1xl]${
                selectedOption.value === option.value ? "bg-gray-100" : ""
              }`}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
