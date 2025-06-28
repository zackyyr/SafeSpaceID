"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";

const filters = ["Terbaru", "Populer", "Paling Banyak Dibalas"];

export default function PostInputBar({ onOpenModal }) {
  const [selectedFilter, setSelectedFilter] = useState("Terbaru");

  return (
    <div className=" rounded-xl space-y-4">
      {/* Filter */}
      <div className="flex justify-between items-center text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <span className="text-gray-500">Filter :</span>
          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="px-2 py-1 border border-gray-300 rounded-md text-sm"
          >
            {filters.map((filter) => (
              <option key={filter} value={filter}>
                {filter}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Input field */}
      <div className="relative">
        <input
          type="text"
          placeholder="Apa yang kamu rasakan sekarang?"
          className="w-full px-4 py-5 rounded-lg text-sm bg-white pr-12"
          onClick={onOpenModal}
          readOnly
        />
        <button
          onClick={onOpenModal}
          className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-1.5 rounded-md"
        >
          <Plus size={18} />
        </button>
      </div>
    </div>
  );
}
