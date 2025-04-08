'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import toast from 'react-hot-toast';

interface Car {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  description: string;
  fuelType: string;
  seatingCapacity: number;
}

export default function CarDetailsPage() {
  const params = useParams();
  const carId = Array.isArray(params.id) ? params.id[0] : params.id || '';
  const [car, setCar] = useState<Car | null>(null);
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const res = await fetch(`https://67f4fd58913986b16fa2af91.mockapi.io/car/${carId}`);
        if (!res.ok) throw new Error('Failed to fetch car details');
        const data = await res.json();
        setCar(data);
      } catch (error) {
        toast.error('Failed to load car details');
        console.error(error);
      }
    };

    fetchCar();

    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    setIsWishlisted(wishlist.includes(carId));
  }, [carId]);

  const handleAddToWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    if (!wishlist.includes(carId)) {
      wishlist.push(carId);
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
      setIsWishlisted(true);
      toast.success('Added to wishlist!');
    } else {
      toast.error('Already in wishlist!');
    }
  };

  if (!car) return <p className="text-center mt-10">Loading car details...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={car.image}
        alt={`Image of ${car.name}`}
        className="w-full h-96 object-cover rounded-xl"
      />
      <h1 className="text-3xl font-bold mt-4">{car.name}</h1>
      <p className="text-lg text-gray-500">{car.brand}</p>
      <p className="text-2xl text-green-600 mt-2">
        {new Intl.NumberFormat('en-IN', {
          style: 'currency',
          currency: 'INR',
        }).format(car.price)}
      </p>
      <p className="mt-4 text-gray-700">{car.description}</p>

      <button
        onClick={handleAddToWishlist}
        disabled={isWishlisted}
        className={`mt-6 px-6 py-2 rounded text-white ${
          isWishlisted
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        {isWishlisted ? 'Already in Wishlist' : 'Add to Wishlist'}
      </button>
    </div>
  );
}
