import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FoodDetail = () => {
    const details = useLoaderData().meals[0];
    const {strMealThumb, strMeal, strInstructions, strArea, idMeal} = details;
    console.log(details)
    return (
        <div>
            <h1 className='text-4xl font-bold my-10'>Food Details</h1>

            <div className=' w-2/4 m-auto'>
                <img className=' h-80 w-full rounded-xl' src={strMealThumb} alt="" />
                <p className='text-3xl mt-3'>Name: {strMeal}</p>
                <p className='text-2xl'>Area: {strArea}</p>
                <p className='text-2xl mt-3'>Price: $ {idMeal}</p>
                <p><span className='font-bold underline'>Descriptions:</span> {strInstructions}</p>
            </div>
        </div>
    );
};

export default FoodDetail;