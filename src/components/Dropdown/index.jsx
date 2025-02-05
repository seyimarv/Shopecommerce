import { useState } from "react";

const Dropdown = ({ onSelect, options, selected }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ul className="relative">
      <div>
        <span>{selected}</span>
      </div>
      <div className="flex flex-col bg-background absolute top-8 min-w-20 shadow-sm py-4 px-4">
        {options?.map(({ title, value }, i) => (
          <li
            key={i}
            onClick={() => onSelect(value)}
            className="px-2 py-2 whitespace-nowrap text-sm"
          >
            {title}
          </li>
        ))}
      </div>
    </ul>
  );
};

export default Dropdown;
