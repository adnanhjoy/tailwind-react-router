import React from 'react';
import { Link } from 'react-router-dom';

const AllFood = ({food}) => {
    console.log(food)
    const {strMeal, strMealThumb} = food;
    return (
        <div className=' shadow-md p-3 rounded-xl shadow-slate-400'>
            <img className=' h-40 w-full rounded-lg' src={strMealThumb} alt="" />
            <p className='text-1xl font-bold my-4'>{strMeal}</p>
            <Link to={`/foods/${strMeal}`}><button className=' px-4 py-2 rounded-md bg-amber-600'>Show Details</button></Link>
        </div>
    );
};

export default AllFood;