"use client"
import React, { useState, useEffect } from 'react';

// Define the fetchMealIdeas function outside of the component
async function fetchMealIdeas(ingredient, setError) {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`);
    }
    const mealData = await response.json();
    setError(null);
    return mealData.meals || [];
  } catch (e) {
    setError(e.message);
    return [];
  }
}

export default function MealIdeas({ingredient}) {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(null);

  async function loadMealIdeas() {
    const data = await fetchMealIdeas(ingredient, setError);
    setMeals(data);
  }

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  if (error) {
    return (
      <div>
        <h2>Meal Ideas:</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className='text-xl font-bold'>Meal Ideas for {ingredient}</h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal}>{meal.strMeal}
          <img src={meal.strMealThumb} alt={meal.strMeal} className='object-cover h-48 w-96' /> {/* Display the meal image */}</li>
        ))}
      </ul>
    </div>
  );
}



