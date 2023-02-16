import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Biryani',
    description: 'Finest Biryani',
    price: 275,
  },
  {
    id: 'm2',
    name: 'Masala Dosa',
    description: 'Consists of Rice 7 Flour',
    price: 160,
  },
  {
    id: 'm3',
    name: 'Burger',
    description: 'Juicy,raw & meaty',
    price: 80,
  },
  {
    id: 'm4',
    name: 'Aalu Partha',
    description: 'Fresh Parathas with veggies',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
