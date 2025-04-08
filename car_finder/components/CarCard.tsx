'use client';

import { Car } from '@/lib/api';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion'; 

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  const router = useRouter();
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    setIsWishlisted(wishlist.includes(car.id));
  }, [car.id]);

  const handleAddToWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');

    if (!wishlist.includes(car.id)) {
      wishlist.push(car.id);
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
      setIsWishlisted(true);
      toast.success('Added to wishlist!');
    } else {
      toast.error('Already in wishlist!');
    }
  };

  const handleClick = () => {
    router.push(`/car/${car.id}`);
  };

  return (
    <motion.div
      onClick={handleClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="border rounded-lg shadow-md p-4 bg-white dark:bg-gray-800 hover:shadow-lg transition cursor-pointer relative"
    >
      <img
        src={car.image}
        alt={`${car.brand} ${car.name}`}
        className="w-full h-48 object-cover rounded mb-4"
      />

      <h2 className="text-xl font-semibold text-blue-600">{car.brand} {car.name}</h2>
      <p className="text-gray-700 dark:text-gray-300 mt-2">
        ₹{car.price.toLocaleString('en-IN')}
      </p>

      <div className="flex gap-2 mt-4">
        <button
          onClick={handleAddToWishlist}
          disabled={isWishlisted}
          className={`px-4 py-2 rounded text-white text-sm ${
            isWishlisted ? 'bg-gray-400 cursor-not-allowed' : 'bg-pink-600 hover:bg-pink-700'
          }`}
        >
          {isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            router.push(`/car/${car.id}`);
          }}
          className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
        >
          View Details
        </button>
      </div>
    </motion.div>
  );
}
