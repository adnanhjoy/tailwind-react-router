import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllFood from '../AllFood/AllFood';

const Food = () => {
    const foods = useLoaderData().meals;
    return (
        <div>
            <h1 className=' text-4xl my-10 font-bold'>Our All Food Items</h1>
            <div className=' grid md:grid-cols-4 gap-5 container m-auto'>
                {
                    foods.map(food => <AllFood
                        key={food.idMeal}
                        food={food}
                    ></AllFood>)
                }
            </div>
        </div>
    );
};

export default Food;