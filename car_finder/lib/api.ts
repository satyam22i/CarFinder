// lib/api.ts

export interface Car {
  id: string; 
  name: string;
  brand: string;
  price: number;
  fuelType: string;
  seatingCapacity: number;
  image: string;
  description: string;
}



const BASE_URL = 'https://67f4fd58913986b16fa2af91.mockapi.io/car';

export const getCars = async (): Promise<Car[]> => {
  const res = await fetch(BASE_URL, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch cars');
  return res.json();
};

export const getCarById = async (id: string): Promise<Car | undefined> => {
  const res = await fetch(`${BASE_URL}/${id}`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch car');
  return res.json();
};
