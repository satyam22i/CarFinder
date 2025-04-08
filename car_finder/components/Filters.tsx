'use client';

import { useEffect, useState } from 'react';

type FiltersProps = {
  brand: string;
  setBrand: (value: string) => void;
  fuelType: string;
  setFuelType: (value: string) => void;
  maxPrice: number;
  setMaxPrice: (value: number) => void;
};

export default function Filters({
  brand,
  setBrand,
  fuelType,
  setFuelType,
  maxPrice,
  setMaxPrice,
}: FiltersProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  
  if (!mounted) return null;

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-md space-y-4">
      <div className="flex flex-col md:flex-row gap-4">
      
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Brand</label>
          <input
            type="text"
            placeholder="e.g. Honda"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="w-full border rounded px-3 py-2 dark:bg-gray-700 dark:text-white"
          />
        </div>

       
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Fuel Type</label>
          <select
            value={fuelType}
            onChange={(e) => setFuelType(e.target.value)}
            className="w-full border rounded px-3 py-2 dark:bg-gray-700 dark:text-white"
          >
            <option value="">All</option>
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
            <option value="Electric">Electric</option>
          </select>
        </div>

      
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Max Price (₹)</label>
          <input
            type="range"
            min="100000"
            max="2000000"
            step="50000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-full"
          />
          <div className="text-sm text-gray-600 dark:text-gray-300">₹{maxPrice.toLocaleString('en-IN')}</div>
        </div>
      </div>
    </div>
  );
}
