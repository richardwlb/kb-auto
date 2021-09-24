import { Register } from "../types";

export const getFormData = (e: React.SyntheticEvent): Register => {
  const target = e.target as typeof e.target & {
    'car-title': { value: string };
    'car-brand': { value: string };
    'car-model': { value: string };
    'car-year': { value: string };
    'car-problem': { value: string };
    'car-solution': { value: string };
  };
  const title = target["car-title"].value; 
  const car_brand = target["car-brand"].value; 
  const car_model = target["car-model"].value; 
  const car_year = target["car-year"].value; 
  const desc_problem = target["car-problem"].value; 
  const desc_solution = target["car-solution"].value; 

  return {
    id: 0,
    title,
    car_brand,
    car_model,
    car_year: parseInt(car_year),
    desc_problem,
    desc_solution,
  }
};