"use client";

import React, { useEffect, useState } from "react";

const Page = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags,population,region",
    )
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((error) => console.log(error));
  }, []);

  const filteredCountries = countries.filter((country) => {
    return country.name.common
      .toLowerCase()
      .includes(search.toLocaleLowerCase());
  });

  return (
    <div className="min-h-screen p-10">
      <h1 className="text-3xl font-bold text-center mb-10">All Countries</h1>

      <div className="flex items-center justify-center my-3">
        <input
          type="text"
          name="search"
          id=""
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-16 py-2 rounded"
        />
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
        {filteredCountries.map((country, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition"
          >
            <img
              src={country.flags.png}
              alt={country.name.common}
              className="w-full h-40 object-cover"
            />

            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">
                {country.name.common}
              </h2>

              <p>
                <strong>Capital:</strong>{" "}
                {country.capital ? country.capital[0] : "N/A"}
              </p>

              <p>
                <strong>Region:</strong> {country.region}
              </p>

              <p>
                <strong>Population:</strong>{" "}
                {country.population.toLocaleString()}
              </p>

              <p>
                <strong>Currency:</strong>{" "}
                {country.currencies
                  ? Object.keys(country.currencies)[0]
                  : "N/A"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
