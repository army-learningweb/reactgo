import { useState } from "react";
import { CircleX } from 'lucide-react';
import { replace } from "react-router";

export default function FreelancerSearchBar({ onSearch, query, filteredUser }) {
  const [inputValue,setInputValue] = useState(query.trim()??"");
  const handleSetInputValue = (value) => {
    onSearch(value);
    setInputValue(value);
  }

  return (
    <>
      <form action="" className="relative" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="search"
          id="search"
          value={inputValue}
          onChange={(e) => handleSetInputValue(e.target.value.toLowerCase())}
          placeholder="Search for name, live, skills,.."
          className="text-sm w-full py-2 px-3 rounded-lg focus:outline-blue-600 bg-white shadow-sm"
        />

        {inputValue && (
          <CircleX onClick={() => handleSetInputValue("")} size={17} className="absolute right-2 top-2.5 text-red-600"/>
        )}
      </form>
      {inputValue && (
        <p className="text-gray-500 text-sm">
          Có ({filteredUser.length}) kết quả tìm kiếm cho "<span className="font-semibold">{inputValue}</span>"
        </p>
      )}
    </>
  );
}
