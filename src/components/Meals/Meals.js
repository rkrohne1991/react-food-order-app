import { Fragment } from "react";

import MealsSummary from "./MealsSummary/MealsSummary";
import AvaliableMeals from "./AvailableMeals/AvailableMeals";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvaliableMeals />
    </Fragment>
  );
};

export default Meals;
