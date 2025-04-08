'use client';

import { useEffect, useState } from 'react';
import { getCars } from '@/lib/api';
import CarCard from '@/components/CarCard';
import Filters from '@/components/Filters';
import Pagination from '@/components/Pagination';
import { Car } from '@/lib/api';

export default function HomePage() {
  const [cars, setCars] = useState<Car[]>([]);
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  const [brand, setBrand] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [maxPrice, setMaxPrice] = useState(2000000);
  const [currentPage, setCurrentPage] = useState(1);
  const [showNote, setShowNote] = useState(false);

  const itemsPerPage = 6;

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCars();
      if (data) {
        setCars(data);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = cars
      .filter(car =>
        brand
          ? (car?.brand ?? '').toLowerCase().includes(brand.toLowerCase())
          : true
      )
      .filter(car =>
        fuelType ? car.fuelType === fuelType : true
      )
      .filter(car => car.price <= maxPrice);

    setFilteredCars(filtered);
    setCurrentPage(1);
  }, [brand, fuelType, maxPrice, cars]);

  const start = (currentPage - 1) * itemsPerPage;
  const paginatedCars = filteredCars.slice(start, start + itemsPerPage);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Car Finder</h1>

      {/* Filters */}
      <Filters
        brand={brand}
        setBrand={setBrand}
        fuelType={fuelType}
        setFuelType={setFuelType}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
      />

      {/* Cars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {paginatedCars.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
        {paginatedCars.length === 0 && (
          <p className="col-span-full text-center text-gray-500">
            No cars found for selected filters.
          </p>
        )}
      </div>

      {/* Pagination */}
      {filteredCars.length > itemsPerPage && (
        <div className="mt-8">
          <Pagination
            totalItems={filteredCars.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      )}

      {/* Show Disclaimer */}
      <div className="mt-12 text-center">
        <button
          onClick={() => setShowNote(true)}
          className="text-sm text-blue-500 underline"
        >
          Show Disclaimer
        </button>
        {showNote && (
          <p className="mt-4 text-xs text-gray-500 italic">
            Note: The car information displayed is randomly generated and only meant for project showcasing purposes.
          </p>
        )}
      </div>
    </div>
  );
}
