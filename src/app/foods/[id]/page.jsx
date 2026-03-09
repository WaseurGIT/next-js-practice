"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const FoodDetail = () => {
  const { id } = useParams();
  const [food, setFood] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFood = async () => {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
      );
      const data = await res.json();
      setFood(data.meals ? data.meals[0] : null);
      setLoading(false);
    };
    fetchFood();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!food) return <p className="text-center mt-10">Food not found!</p>;

  return (
    <div className="min-h-screen p-10 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4">{food.strMeal}</h1>
      <img
        src={food.strMealThumb}
        alt={food.strMeal}
        className="w-full max-w-xl rounded-lg mb-4"
      />
      <p className="text-gray-700 mb-2">
        <strong>Category:</strong> {food.strCategory}
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Area:</strong> {food.strArea}
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Instructions:</strong> {food.strInstructions}
      </p>
    </div>
  );
};

export default FoodDetail;
