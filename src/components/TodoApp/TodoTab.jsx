import { useState } from "react";

export default function TodoTab({ onSetTab, tab }) {
 
  return (
    <nav className="flex items-center gap-1.5 rounded-xl bg-slate-100 p-1">
      <button
        onClick={(e) => onSetTab(null)}
        className={`flex-1 rounded-lg  py-1.5 text-sm font-medium transition  ${tab == null ? "bg-white shadow-sm text-blue-600" : ""}`}
      >
        All
      </button>
      <button
        onClick={(e) => onSetTab(false)}
       className={`flex-1 rounded-lg  py-1.5 text-sm font-medium transition  ${tab == false ? "bg-white shadow-sm text-blue-600" : ""}`}
      >
        Active
      </button>
      <button
        onClick={(e) => onSetTab(true)}
       className={`flex-1 rounded-lg  py-1.5 text-sm font-medium transition  ${tab == true ? "bg-white shadow-sm text-blue-600" : ""}`}
      >
        Completed
      </button>
    </nav>
  );
}
