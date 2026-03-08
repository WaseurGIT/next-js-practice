"use client";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s")
      .then((res) => res.json())
      .then((data) => {
        setFoods(data.meals);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="min-h-screen p-10">
      <h1 className="text-3xl font-bold text-center mb-10">All Foods</h1>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {foods?.map((food) => (
            <div
              key={food.idMeal}
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition"
            >
              <img
                src={food.strMealThumb}
                alt={food.strMeal}
                className="w-full h-60 object-cover"
              />

              <div className="p-4">
                <h2 className="text-xl font-semibold">{food.strMeal}</h2>
                <p className="text-gray-500">{food.strCategory}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
