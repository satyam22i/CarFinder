'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import toast from 'react-hot-toast'

interface Car {
  id: string
  name: string
  brand: string
  price: number
  image: string
  description: string
  fuelType: string
  seatingCapacity: number
}

export default function WishlistPage() {
  const [wishlistCars, setWishlistCars] = useState<Car[]>([])

  useEffect(() => {
    const fetchWishlistCars = async () => {
      const wishlistIds = JSON.parse(localStorage.getItem('wishlist') || '[]')

      if (!wishlistIds.length) return

      try {
        const carPromises = wishlistIds.map((id: string) =>
          fetch(`https://67f4fd58913986b16fa2af91.mockapi.io/car/${id}`).then(res => res.json())
        )

        const carData = await Promise.all(carPromises)

        const validCars = carData.filter(
          (car: Car) => car && car.id && typeof car.price === 'number'
        )

        setWishlistCars(validCars)
      } catch (err) {
        toast.error('Failed to load wishlist cars')
        console.error(err)
      }
    }

    fetchWishlistCars()
  }, [])

  const handleRemove = (id: string) => {
    const updatedWishlist = wishlistCars.filter(car => car.id !== id)
    setWishlistCars(updatedWishlist)

    const storedWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]')
    const newWishlist = storedWishlist.filter((carId: string) => carId !== id)
    localStorage.setItem('wishlist', JSON.stringify(newWishlist))

    toast.success('Removed from wishlist')
  }

  if (!wishlistCars.length) {
    return <p className="text-center mt-10 text-lg text-gray-600">Your wishlist is empty.</p>
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Wishlist</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlistCars.map(car => (
          <div
            key={car.id}
            className="border rounded-lg shadow-md p-4 bg-white dark:bg-gray-800"
          >
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-semibold">{car.name}</h2>
            <p className="text-gray-600">{car.brand}</p>
            <p className="text-green-600 font-bold">
              ₹{typeof car.price === 'number' ? car.price.toLocaleString('en-IN') : 'N/A'}
            </p>
            <button
              onClick={() => handleRemove(car.id)}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Remove from Wishlist
            </button>
          </div>
        ))}
      </div>

      <Link href="/" className="block text-center mt-8 text-blue-600 hover:underline">
        ← Back to Home
      </Link>
    </div>
  )
}
