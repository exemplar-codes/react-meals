import React, { useEffect, useState } from "react";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

import classes from "./AvailableMeals.module.css";

// Fetching meals from the server, so this list is not needed
// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ];

function AvailableMeals() {
  const [fetchedMeals, setFetchedMeals] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  const fetchMeals = async () => {
    setIsLoading(true);
    try {
      const resp = await fetch(
        "https://react-http-88257-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json"
      );

      if (!resp.ok) throw new Error("Empty response");

      const data = await resp.json();

      setFetchedMeals(
        Object.entries(data).map(([key, values]) => {
          return { ...values, id: key };
        })
      );
    } catch (error) {
      setFetchError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  const mealsList = fetchedMeals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      price={meal.price}
      description={meal.description}
    />
  ));

  return (
    <section className={classes.meals}>
      {!(isLoading || fetchError) && (
        <Card>
          <ul>{mealsList}</ul>
        </Card>
      )}
      {isLoading && <p>Loading...</p>}
      {fetchError && <p>{`${fetchError}`}</p>}
    </section>
  );
}
export default AvailableMeals;
