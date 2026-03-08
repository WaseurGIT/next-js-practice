"use client";

import React, { useEffect, useState } from "react";

const Page = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,capital,currencies")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="min-h-screen p-10">
      <h1 className="text-3xl font-bold text-center mb-10">All Countries</h1>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
        {countries.map((country, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-5 hover:scale-105 transition"
          >
            <h2 className="text-xl font-semibold">{country.name.common}</h2>

            <p className="text-gray-500">
              Capital: {country.capital ? country.capital[0] : "N/A"}
            </p>

            <p className="text-gray-600">
              Currency:{" "}
              {country.currencies
                ? Object.keys(country.currencies)[0]
                : "N/A"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;