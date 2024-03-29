import React from "react";

const SelectField = ({
  label,
  id,
  extra,
  name,
  placeholder,
  variant,
  state,
  disabled,
  options,
}) => {
  return (
    <div className={`${extra}`}>
      <label
        htmlFor={id}
        className={`text-sm text-navy-700 dark:text-white ${
          variant === "auth" ? "ml-1.5 font-medium" : "ml-3 font-bold"
        }`}
      >
        {label}
      </label>
      <select
        id={id}
        value={state}
        onChange={(e) => onChange(e.target.value)}
        className="my-2 block h-12 w-full rounded-xl border border-gray-300 bg-white/0 p-3 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:!bg-white/5 dark:text-white dark:placeholder-gray-400 dark:placeholder:!text-[rgba(255,255,255,0.15)] dark:focus:border-blue-500 dark:focus:ring-blue-500"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
